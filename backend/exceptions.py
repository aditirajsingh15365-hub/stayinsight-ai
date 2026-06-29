from fastapi import Request
from fastapi.responses import JSONResponse


class ReviewNotFoundException(Exception):
    pass


async def review_not_found_handler(
    request: Request,
    exc: ReviewNotFoundException
):
    return JSONResponse(
        status_code=404,
        content={
            "error": "Review not found"
        }
    )