from fastapi import APIRouter

router = APIRouter(prefix="/insights", tags=["AI Insights"])

@router.get("/")
def get_insights():
    return {
        "strengths": [
            "Clean Rooms",
            "Friendly Staff"
        ],
        "issues": [
            "Slow Check-in"
        ]
    }

@router.get("/recommendations")
def get_recommendations():
    return {
        "recommendations": [
            "Improve reception staffing",
            "Reduce check-in waiting time"
        ]
    }