import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function ReviewAnalyzer() {
  const { darkMode } = useTheme();

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!review.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/analyze-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            review,
          }),
        }
      );

      const data = await response.json();
      await fetch(
        "http://127.0.0.1:8000/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review: review,
          sentiment: data.sentiment,
          theme: data.themes?.join(", "),
          priority: data.priority,
          }),
        }
      );


      setAnalysis({
        sentiment: data.sentiment,
        theme: data.themes?.join(", "),
        priority: data.priority,
        response: data.suggested_response,
      });
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = darkMode
    ? "bg-[#312924] border border-[#3A302A]"
    : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5";

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="mb-10">

          <span className="text-[#C85A32] font-semibold">
            Guest Feedback Intelligence
          </span>

          <h1
            className={`text-4xl md:text-5xl font-bold font-serif mt-3 ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Review Experience Analyzer
          </h1>

          <p
            className={`mt-4 max-w-3xl ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Transform guest reviews into meaningful hospitality
            insights. Discover sentiment, identify recurring
            themes, prioritize improvements, and generate
            thoughtful guest responses.
          </p>

        </div>

        {/* Input Section */}

        <div className={`${cardStyle} rounded-3xl p-8`}>

          <label
            className={`text-lg font-medium ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Guest Review
          </label>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Paste a guest review here..."
            className={`
              w-full
              mt-4
              h-44
              rounded-2xl
              p-5
              outline-none
              resize-none
              transition-all
              ${
                darkMode
                  ? `
                    bg-[#221C18]
                    border border-[#3A302A]
                    text-[#F7F1EA]
                    focus:border-[#C85A32]
                  `
                  : `
                    bg-[#FAF6F0]
                    border border-[#E8DDD2]
                    text-[#26211E]
                    focus:border-[#C85A32]
                  `
              }
            `}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
              mt-6
              px-8
              py-3
              rounded-lg
              bg-[#C85A32]
              hover:bg-[#B44D28]
              transition-all
              duration-300
              font-semibold
              text-white
              disabled:opacity-50
            "
          >
            {loading
              ? "Generating Insights..."
              : "Generate Insights"}
          </button>

        </div>

        {/* Empty State */}

        {!analysis && !loading && (
          <div
            className={`mt-10 text-center ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Submit a review to uncover guest experience insights.
          </div>
        )}

        {/* Results */}

        {analysis && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-[#61554E]">
                  Guest Sentiment
                </p>

                <h2
                  className={`text-3xl font-bold mt-3 ${
                    darkMode
                      ? "text-[#F7F1EA]"
                      : "text-[#26211E]"
                  }`}
                >
                  {analysis.sentiment}
                </h2>
              </div>

              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-[#61554E]">
                  Key Themes
                </p>

                <h2 className="text-2xl font-bold text-[#C85A32] mt-3">
                  {analysis.theme}
                </h2>
              </div>

              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-[#61554E]">
                  Attention Level
                </p>

                <h2 className="text-3xl font-bold text-[#8B261E] mt-3">
                  {analysis.priority}
                </h2>
              </div>

            </div>

            <div className={`${cardStyle} rounded-3xl p-8 mt-10`}>

              <h2 className="text-2xl font-bold text-[#C85A32] mb-4">
                Suggested Guest Response
              </h2>

              <p
                className={`leading-relaxed ${
                  darkMode
                    ? "text-[#C8B8A6]"
                    : "text-[#61554E]"
                }`}
              >
                {analysis.response}
              </p>

            </div>
          </>
        )}

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default ReviewAnalyzer;