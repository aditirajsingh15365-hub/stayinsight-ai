from fastapi import APIRouter, status

from schemas.review_schema import (
    ReviewRequest,
    ReviewResponse
)

from services.review_service import (
    analyze_review_service
)

from services.review_store import reviews

from exceptions import ReviewNotFoundException


router = APIRouter()


# -----------------------------
# CRUD ENDPOINTS
# -----------------------------

@router.get("/reviews")
def get_reviews():
    return reviews


@router.get("/reviews/{review_id}")
def get_review(review_id: int):

    for review in reviews:
        if review["id"] == review_id:
            return review

    raise ReviewNotFoundException()


@router.post(
    "/reviews",
    status_code=status.HTTP_201_CREATED
)
def create_review(review: dict):

    new_review = {
        "id": len(reviews) + 1,
        **review
    }

    reviews.append(new_review)

    return new_review


@router.put("/reviews/{review_id}")
def update_review(
    review_id: int,
    updated_review: dict
):

    for review in reviews:

        if review["id"] == review_id:

            review.update(updated_review)

            return review

    raise ReviewNotFoundException()


@router.delete(
    "/reviews/{review_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_review(review_id: int):

    for review in reviews:

        if review["id"] == review_id:

            reviews.remove(review)

            return

    raise ReviewNotFoundException()


@router.get("/reviews/search")
def search_reviews(q: str):

    results = []

    for review in reviews:

        if q.lower() in review["review"].lower():
            results.append(review)

    return results


# -----------------------------
# REVIEW ANALYZER ENDPOINTS
# -----------------------------

@router.post(
    "/analyze-review",
    response_model=ReviewResponse
)
def analyze_review(review: ReviewRequest):

    return analyze_review_service(
        review.review
    )


@router.post("/generate-response")
def generate_response():

    return {
        "response":
        "Thank you for your feedback. We appreciate your comments and will work on improving our service."
    }

