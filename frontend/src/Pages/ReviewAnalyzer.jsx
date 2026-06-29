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
    ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/10"
    : "bg-white border border-slate-200 shadow-lg";

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <span className="text-cyan-500 font-semibold">
            AI Powered Analysis
          </span>

          <h1
            className={`text-4xl md:text-5xl font-bold mt-3 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Review Analyzer
          </h1>

          <p
            className={`mt-4 max-w-3xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Analyze guest feedback using AI to identify sentiment,
            key themes, priority level, and generate professional
            response suggestions.
          </p>
        </div>

        <div className={`${cardStyle} rounded-3xl p-8`}>
          <label
            className={`text-lg font-medium ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Guest Review
          </label>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Paste customer review here..."
            className={`w-full mt-4 h-44 rounded-2xl p-5 outline-none resize-none transition-all
            ${
              darkMode
                ? "bg-slate-900/50 border border-white/10 text-white focus:border-cyan-400"
                : "bg-slate-50 border border-slate-300 text-slate-900 focus:border-cyan-500"
            }`}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
            mt-6
            px-8
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            transition
            font-semibold
            text-white
            disabled:opacity-50
          "
          >
            {loading ? "Analyzing..." : "Analyze Review"}
          </button>
        </div>

        {!analysis && !loading && (
          <div
            className={`mt-10 text-center ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Submit a review to generate AI insights.
          </div>
        )}

        {analysis && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-slate-400">Sentiment</p>

                <h2 className="text-3xl font-bold text-green-500 mt-3">
                  {analysis.sentiment}
                </h2>
              </div>

              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-slate-400">Themes</p>

                <h2 className="text-2xl font-bold text-cyan-500 mt-3">
                  {analysis.theme}
                </h2>
              </div>

              <div className={`${cardStyle} rounded-3xl p-6`}>
                <p className="text-slate-400">Priority</p>

                <h2 className="text-3xl font-bold text-yellow-500 mt-3">
                  {analysis.priority}
                </h2>
              </div>
            </div>

            <div className={`${cardStyle} rounded-3xl p-8 mt-10`}>
              <h2 className="text-2xl font-bold text-cyan-500 mb-4">
                Suggested Response
              </h2>

              <p
                className={`leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-700"
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
