from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from datetime import datetime, timedelta

from database.dependencies import get_db
from database.models import Review
from database.auth_dependency import get_current_user

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def get_stats(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    reviews = db.query(Review).all()

    total_reviews = len(reviews)

    positive_reviews = len([
        review for review in reviews
        if review.sentiment and
        review.sentiment.lower() in [
            "positive",
            "very positive"
        ]
    ])

    negative_reviews = len([
        review for review in reviews
        if review.sentiment and
        review.sentiment.lower() == "negative"
    ])

    neutral_reviews = len([
        review for review in reviews
        if review.sentiment and
        review.sentiment.lower() == "neutral"
    ])

    return {
        "total_reviews": total_reviews,
        "positive": positive_reviews,
        "negative": negative_reviews,
        "neutral": neutral_reviews
    }


@router.get("/trends")
def get_trends(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    reviews = db.query(Review).all()

    now = datetime.utcnow()

    today_count = 0
    week_count = 0
    month_count = 0

    for review in reviews:

        if not review.created_at:
            continue

        time_difference = now - review.created_at

        if time_difference <= timedelta(days=1):
            today_count += 1

        if time_difference <= timedelta(days=7):
            week_count += 1

        if time_difference <= timedelta(days=30):
            month_count += 1

    return {
        "today": today_count,
        "this_week": week_count,
        "this_month": month_count
    }
