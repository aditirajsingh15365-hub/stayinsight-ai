import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReviewAnalyzer() {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!review.trim()) return;

    setLoading(true);

    try {
      // Future FastAPI Endpoint

      /*
      const response = await axios.post(
        "http://localhost:8000/api/analyze",
        { review }
      );

      setAnalysis(response.data);
      */

      // Temporary Mock Response

      setTimeout(() => {
        setAnalysis({
          sentiment: "Positive",
          theme: "Host Behaviour",
          priority: "Low",
          response:
            "Thank you for your valuable feedback. We are delighted that you enjoyed your stay and appreciate your kind words.",
        });

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="mb-10">
          <span className="text-cyan-400 font-semibold">
            AI Powered Analysis
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Review Analyzer
          </h1>

          <p className="text-slate-400 mt-4 max-w-3xl">
            Analyze guest feedback using AI to identify sentiment,
            key themes, priority level, and generate professional
            response suggestions.
          </p>
        </div>

        {/* Input Card */}

        <div className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          shadow-2xl
          shadow-cyan-500/10
        ">

          <label className="text-lg font-medium">
            Guest Review
          </label>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Paste customer review here..."
            className="
              w-full
              mt-4
              h-44
              bg-slate-900/50
              border border-white/10
              rounded-2xl
              p-5
              text-white
              outline-none
              focus:border-cyan-400
              resize-none
            "
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
              disabled:opacity-50
            "
          >
            {loading ? "Analyzing..." : "Analyze Review"}
          </button>

        </div>

        {/* Empty State */}

        {!analysis && !loading && (
          <div className="mt-10 text-center text-slate-400">
            Submit a review to generate AI insights.
          </div>
        )}

        {/* Results */}

        {analysis && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                shadow-lg
              ">
                <p className="text-slate-400">
                  Sentiment
                </p>

                <h2 className="text-3xl font-bold text-green-400 mt-3">
                  {analysis.sentiment}
                </h2>
              </div>

              <div className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                shadow-lg
              ">
                <p className="text-slate-400">
                  Theme
                </p>

                <h2 className="text-3xl font-bold text-cyan-400 mt-3">
                  {analysis.theme}
                </h2>
              </div>

              <div className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                shadow-lg
              ">
                <p className="text-slate-400">
                  Priority
                </p>

                <h2 className="text-3xl font-bold text-yellow-400 mt-3">
                  {analysis.priority}
                </h2>
              </div>

            </div>

            {/* Suggested Response */}

            <div className="
              mt-10
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              shadow-2xl
              shadow-cyan-500/10
            ">

              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Suggested Response
              </h2>

              <p className="text-slate-300 leading-relaxed">
                {analysis.response}
              </p>

            </div>
          </>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default ReviewAnalyzer;
