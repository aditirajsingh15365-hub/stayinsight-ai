from pydantic import BaseModel, EmailStr, Field


class UserRegister(BaseModel):

    email: EmailStr

    password: str = Field(
        min_length=8,
        max_length=100,
        description="Password must be between 8 and 100 characters"
    )


class UserLogin(BaseModel):

    email: EmailStr

    password: str = Field(
        min_length=8,
        max_length=100,
        description="Password must be between 8 and 100 characters"
    )


class TokenResponse(BaseModel):

    access_token: str

    token_type: str