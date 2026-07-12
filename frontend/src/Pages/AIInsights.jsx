import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function AIInsights() {
  const { darkMode } = useTheme();

  const [insightsData, setInsightsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const token = localStorage.getItem("token");

        const insightsResponse = await fetch(
          "http://127.0.0.1:8000/insights/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const recommendationsResponse = await fetch(
          "http://127.0.0.1:8000/insights/recommendations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const insights = await insightsResponse.json();
        const recommendations =
          await recommendationsResponse.json();

        setInsightsData({
          ...insights,
          recommendations:
            recommendations.recommendations,
        });
      } catch (error) {
        console.error(
          "Insights API Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const cardStyle = darkMode
    ? "bg-[#312924] border border-[#3A302A]"
    : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5";

  if (loading) {
    return (
      <ThemeLayout>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1
            className={`text-3xl font-bold ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Loading Insights...
          </h1>
        </div>

        <Footer />
      </ThemeLayout>
    );
  }

  if (!insightsData) {
    return (
      <ThemeLayout>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-[#8B261E]">
            Failed to load insights.
          </h1>
        </div>

        <Footer />
      </ThemeLayout>
    );
  }

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-10">

          <span className="text-[#C85A32] font-semibold">
            Guest Experience Intelligence
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
            Guest Experience Insights
          </h1>

          <p
            className={`mt-4 max-w-3xl ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Understand what guests truly value,
            uncover recurring themes, and discover
            actionable opportunities to elevate every stay.
          </p>

        </div>

        <div className={`${cardStyle} rounded-3xl p-8`}>

          <h2 className="text-2xl font-bold text-[#C85A32] mb-3">
            Guest Experience Summary
          </h2>

          <p
            className={`leading-relaxed ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            {insightsData.summary}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div
            className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
          >
            <h2 className="text-xl font-bold text-[#C85A32] mb-5">
              Guest Favorites
            </h2>

            <ul
              className={`space-y-3 ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              {insightsData.strengths.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

          </div>

          <div
            className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
          >
            <h2 className="text-xl font-bold text-[#8B261E] mb-5">
              Improvement Opportunities
            </h2>

            <ul
              className={`space-y-3 ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              {insightsData.issues.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

          </div>

          <div
            className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
          >
            <h2 className="text-xl font-bold text-[#C85A32] mb-5">
              Recommended Actions
            </h2>

            <ul
              className={`space-y-3 ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              {insightsData.recommendations.map(
                (item) => (
                  <li key={item}>→ {item}</li>
                )
              )}
            </ul>

          </div>

        </div>

        <div
          className={`${cardStyle} rounded-3xl p-8 mt-10`}
        >

          <h2
            className={`text-2xl font-bold mb-6 ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Insight Quality Metrics
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <p className="text-[#61554E]">
                Sentiment Accuracy
              </p>

              <h3
                className={`text-4xl font-bold mt-2 ${
                  darkMode
                    ? "text-[#F7F1EA]"
                    : "text-[#26211E]"
                }`}
              >
                {insightsData.metrics.sentimentAccuracy}%
              </h3>
            </div>

            <div>
              <p className="text-[#61554E]">
                Theme Detection
              </p>

              <h3
                className={`text-4xl font-bold mt-2 ${
                  darkMode
                    ? "text-[#F7F1EA]"
                    : "text-[#26211E]"
                }`}
              >
                {insightsData.metrics.themeDetection}%
              </h3>
            </div>

            <div>
              <p className="text-[#61554E]">
                Recommendation Quality
              </p>

              <h3
                className={`text-4xl font-bold mt-2 ${
                  darkMode
                    ? "text-[#F7F1EA]"
                    : "text-[#26211E]"
                }`}
              >
                {insightsData.metrics.recommendationQuality}%
              </h3>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default AIInsights;