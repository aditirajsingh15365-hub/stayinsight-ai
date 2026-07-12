def analyze_review_service(review_text: str):

    review_lower = review_text.lower()

    # Sentiment Detection

    positive_words = [
        "good",
        "great",
        "excellent",
        "amazing",
        "clean",
        "friendly",
        "comfortable",
        "wonderful",
        "beautiful"
    ]

    negative_words = [
        "bad",
        "poor",
        "dirty",
        "slow",
        "terrible",
        "worst",
        "problem",
        "issue",
        "uncomfortable"
    ]

    positive_score = sum(
        word in review_lower
        for word in positive_words
    )

    negative_score = sum(
        word in review_lower
        for word in negative_words
    )

    if positive_score > negative_score:
        sentiment = "Positive"
        priority = "Low"

    elif negative_score > positive_score:
        sentiment = "Negative"
        priority = "High"

    else:
        sentiment = "Neutral"
        priority = "Medium"

    # Theme Detection

    themes = []

    if "wifi" in review_lower:
        themes.append("WiFi")

    if "clean" in review_lower:
        themes.append("Cleanliness")

    if "staff" in review_lower:
        themes.append("Hospitality")

    if "food" in review_lower:
        themes.append("Food")

    if "parking" in review_lower:
        themes.append("Parking")

    if "check-in" in review_lower:
        themes.append("Check-In")

    if not themes:
        themes.append("General")

    # Suggested Response

    if sentiment == "Positive":

        response = (
            "Thank you for your wonderful feedback. "
            "We are delighted that you enjoyed your stay."
        )

    elif sentiment == "Negative":

        response = (
            "Thank you for sharing your feedback. "
            "We apologize for the inconvenience and "
            "will work to improve the experience."
        )

    else:

        response = (
            "Thank you for your feedback. "
            "We appreciate your comments and "
            "will continue improving our services."
        )

    return {
        "sentiment": sentiment,
        "score": 0.85,
        "themes": themes,
        "priority": priority,
        "suggested_response": response
    }