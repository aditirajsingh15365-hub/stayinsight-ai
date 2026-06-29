from pydantic import BaseModel


class ReviewRequest(BaseModel):
    review: str


class ReviewResponse(BaseModel):
    sentiment: str
    score: float
    themes: list[str]
    priority: str
    suggested_response: str