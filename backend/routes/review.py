from fastapi import APIRouter, status, Depends
from sqlalchemy.orm import Session

from schemas.review_schema import (
    ReviewRequest,
    ReviewResponse
)

from services.ai_service import analyze_review_with_ai
from services.review_service import analyze_review_service

from database.models import Review
from database.dependencies import get_db

from exceptions import ReviewNotFoundException

router = APIRouter()

# -----------------------------
# CRUD ENDPOINTS
# -----------------------------

@router.get("/reviews")
def get_reviews(
    db: Session = Depends(get_db)
):
    return db.query(Review).all()


@router.get("/reviews/search")
def search_reviews(
    q: str,
    db: Session = Depends(get_db)
):
    return (
        db.query(Review)
        .filter(
            Review.review_text.ilike(
                f"%{q}%"
            )
        )
        .all()
    )


@router.get("/reviews/{review_id}")
def get_review(
    review_id: int,
    db: Session = Depends(get_db)
):

    review = (
        db.query(Review)
        .filter(
            Review.id == review_id
        )
        .first()
    )

    if not review:
        raise ReviewNotFoundException()

    return review


@router.post(
    "/reviews",
    status_code=status.HTTP_201_CREATED
)
def create_review(
    review: dict,
    db: Session = Depends(get_db)
):

    new_review = Review(
        review_text=review["review"],
        sentiment=review.get(
            "sentiment",
            "Neutral"
        ),
        theme=review.get(
            "theme",
            "General"
        ),
        priority=review.get(
            "priority",
            "Low"
        )
    )

    db.add(new_review)

    db.commit()

    db.refresh(new_review)

    return new_review


@router.put("/reviews/{review_id}")
def update_review(
    review_id: int,
    updated_review: dict,
    db: Session = Depends(get_db)
):

    review = (
        db.query(Review)
        .filter(
            Review.id == review_id
        )
        .first()
    )

    if not review:
        raise ReviewNotFoundException()

    if "review" in updated_review:
        review.review_text = updated_review["review"]

    if "sentiment" in updated_review:
        review.sentiment = updated_review["sentiment"]

    if "theme" in updated_review:
        review.theme = updated_review["theme"]

    if "priority" in updated_review:
        review.priority = updated_review["priority"]

    db.commit()

    db.refresh(review)

    return review


@router.delete(
    "/reviews/{review_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_review(
    review_id: int,
    db: Session = Depends(get_db)
):

    review = (
        db.query(Review)
        .filter(
            Review.id == review_id
        )
        .first()
    )

    if not review:
        raise ReviewNotFoundException()

    db.delete(review)

    db.commit()

    return


# -----------------------------
# REVIEW ANALYZER ENDPOINTS
# -----------------------------

@router.post(
    "/analyze-review",
    response_model=ReviewResponse
)
def analyze_review(
    review: ReviewRequest
):
    try:
        return analyze_review_with_ai(
            review.review
        )

    except Exception as e:
        print(f"AI Error: {e}")

        # Fallback to rule-based analyzer
        return analyze_review_service(
            review.review
        )


@router.post("/generate-response")
def generate_response():

    return {
        "response":
        "Thank you for your feedback. We appreciate your comments and will work on improving our service."
    }