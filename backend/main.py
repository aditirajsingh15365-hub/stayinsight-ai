from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from starlette.middleware.sessions import SessionMiddleware

from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

from routes.review import router as review_router
from routes.dashboard import router as dashboard_router
from routes.insights import router as insights_router
from routes.auth import router as auth_router

from database.connection import engine
from database.models import Base

from exceptions import (
    ReviewNotFoundException,
    review_not_found_handler
)

Base.metadata.create_all(bind=engine)

limiter = Limiter(
    key_func=get_remote_address
)

app = FastAPI(
    title="StayInsight AI Backend",
    version="1.0.0"
)

# -----------------------------
# OAuth Session Middleware
# -----------------------------
app.add_middleware(
    SessionMiddleware,
    secret_key="stayinsight_oauth_secret_2026"
)

# -----------------------------
# Rate Limiter
# -----------------------------
app.state.limiter = limiter

app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Custom Exception Handlers
# -----------------------------
app.add_exception_handler(
    ReviewNotFoundException,
    review_not_found_handler
)

# -----------------------------
# Routers
# -----------------------------
app.include_router(review_router)
app.include_router(dashboard_router)
app.include_router(insights_router)
app.include_router(auth_router)

# -----------------------------
# Root Endpoint
# -----------------------------
@app.get("/")
def root():
    return {
        "message": "StayInsight AI Backend Running"
    }