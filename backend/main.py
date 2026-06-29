from fastapi import FastAPI
from routes.review import router as review_router
from routes.dashboard import router as dashboard_router
from routes.insights import router as insights_router
from fastapi.middleware.cors import CORSMiddleware
from exceptions import (
    ReviewNotFoundException,
    review_not_found_handler
)
app = FastAPI(
    title="StayInsight AI Backend",
    version="1.0.0"
)
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
app.include_router(review_router)
app.include_router(review_router)
app.include_router(dashboard_router)
app.include_router(insights_router)
app.add_exception_handler(
    ReviewNotFoundException,
    review_not_found_handler
)
@app.get("/")
def root():
    return {
        "message": "StayInsight AI Backend Running"
    }