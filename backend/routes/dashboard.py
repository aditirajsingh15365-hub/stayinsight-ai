from fastapi import APIRouter

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/stats")
def get_stats():
    return {
        "total_reviews": 150,
        "positive": 110,
        "negative": 20,
        "neutral": 20
    }

@router.get("/trends")
def get_trends():
    return {
        "jan": 80,
        "feb": 95,
        "mar": 120
    }