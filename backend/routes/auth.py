from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from authlib.integrations.starlette_client import OAuthError
from utils.oauth import oauth


from slowapi import Limiter
from slowapi.util import get_remote_address

from database.dependencies import get_db
from database.models import User
from database.auth_dependency import get_current_user

from schemas.auth_schema import (
    UserRegister,
    UserLogin,
    TokenResponse
)

from utils.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

limiter = Limiter(key_func=get_remote_address)

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


@router.post("/register")
@limiter.limit("5/15minutes")
def register_user(
    request: Request,
    user: UserRegister,
    db: Session = Depends(get_db)
):
    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = pwd_context.hash(
        user.password
    )

    new_user = User(
        email=user.email,
        hashed_password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }


@router.post(
    "/login",
    response_model=TokenResponse
)
@limiter.limit("5/15minutes")
def login_user(
    request: Request,
    user: UserLogin,
    db: Session = Depends(get_db)
):
    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    valid_password = pwd_context.verify(
        user.password,
        db_user.hashed_password
    )

    if not valid_password:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        {
            "sub": db_user.email,
            "user_id": db_user.id
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.get("/me")
def get_me(
    current_user=Depends(get_current_user)
):
    return {
        "message": "Protected route accessed",
        "user": current_user
    }
@router.get("/github")
async def github_login(request: Request):

    redirect_uri = (
        "http://localhost:8000/auth/github/callback"
    )

    return await oauth.github.authorize_redirect(
        request,
        redirect_uri
    )


@router.get("/github/callback")
async def github_callback(request: Request):

    try:

        token = await oauth.github.authorize_access_token(
            request
        )

        user_data = await oauth.github.get(
            "user",
            token=token
        )

        github_user = user_data.json()

        return RedirectResponse(
            url=f"http://localhost:5173/login?github={github_user['login']}"
        )

    except OAuthError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )