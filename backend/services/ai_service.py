import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

API_URL = "https://router.huggingface.co/v1/chat/completions"

HEADERS = {
    "Authorization": f"Bearer {HF_API_KEY}",
    "Content-Type": "application/json",
}


# ============================================================
# Review Analyzer
# ============================================================

def analyze_review_with_ai(review: str):

    prompt = f"""
You are an AI assistant for StayInsight AI.

Analyze the following hotel guest review.

Return ONLY valid JSON.

Format:

{{
    "sentiment": "Positive/Negative/Neutral",
    "score": 0.95,
    "themes": ["Theme1", "Theme2"],
    "priority": "Low/Medium/High",
    "suggested_response": "Professional response to the customer."
}}

Review:
{review}
"""

    payload = {
        "model": "Qwen/Qwen2.5-7B-Instruct",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.3,
        "max_tokens": 300
    }

    try:

        response = requests.post(
            API_URL,
            headers=HEADERS,
            json=payload,
            timeout=30
        )

        response.raise_for_status()

        result = response.json()

        content = result["choices"][0]["message"]["content"].strip()

        if content.startswith("```json"):
            content = (
                content
                .replace("```json", "")
                .replace("```", "")
                .strip()
            )

        elif content.startswith("```"):
            content = (
                content
                .replace("```", "")
                .strip()
            )

        return json.loads(content)

    except requests.exceptions.RequestException as e:
        raise Exception(f"Hugging Face API Error: {e}")

    except json.JSONDecodeError:
        raise Exception(
            f"Invalid JSON returned by AI.\n\n{content}"
        )


# ============================================================
# AI Insights Generator
# ============================================================

def generate_insights_with_ai(reviews):

    if not reviews:
        return {
            "summary": "No guest reviews are available yet.",
            "strengths": [],
            "issues": [],
            "recommendations": []
        }

    review_text = "\n".join(
        [f"- {review}" for review in reviews]
    )

    prompt = f"""
You are an AI hospitality analyst.

Analyze the following hotel guest reviews.

Generate an executive summary.

Return ONLY valid JSON.

Format:

{{
    "summary":"Executive summary",
    "strengths":[
        "Strength 1",
        "Strength 2",
        "Strength 3"
    ],
    "issues":[
        "Issue 1",
        "Issue 2",
        "Issue 3"
    ],
    "recommendations":[
        "Recommendation 1",
        "Recommendation 2",
        "Recommendation 3"
    ]
}}

Guest Reviews:

{review_text}
"""

    payload = {
        "model": "Qwen/Qwen2.5-7B-Instruct",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.2,
        "max_tokens": 700
    }

    try:

        response = requests.post(
            API_URL,
            headers=HEADERS,
            json=payload,
            timeout=60
        )

        response.raise_for_status()

        result = response.json()

        content = result["choices"][0]["message"]["content"].strip()

        if content.startswith("```json"):
            content = (
                content
                .replace("```json", "")
                .replace("```", "")
                .strip()
            )

        elif content.startswith("```"):
            content = (
                content
                .replace("```", "")
                .strip()
            )

        data = json.loads(content)

        return {
            "summary": data.get(
                "summary",
                "No summary generated."
            ),
            "strengths": data.get(
                "strengths",
                []
            ),
            "issues": data.get(
                "issues",
                []
            ),
            "recommendations": data.get(
                "recommendations",
                []
            )
        }

    except requests.exceptions.RequestException as e:
        raise Exception(f"Hugging Face API Error: {e}")

    except json.JSONDecodeError:
        raise Exception(
            f"Invalid JSON returned by AI.\n\n{content}"
        )