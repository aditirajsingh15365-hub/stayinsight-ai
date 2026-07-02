import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const { darkMode } = useTheme();

  const [stats, setStats] = useState(null);
  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsResponse = await fetch(
          "http://127.0.0.1:8000/dashboard/stats"
        );

        const trendsResponse = await fetch(
          "http://127.0.0.1:8000/dashboard/trends"
        );

        const statsData = await statsResponse.json();
        const trendsData = await trendsResponse.json();

        setStats(statsData);
        setTrends(trendsData);
      } catch (error) {
        console.error("Dashboard API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const cardStyle = darkMode
    ? "bg-[#312924] border border-[#3A302A]"
    : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5";

  if (loading) {
    return (
      <ThemeLayout>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-12">
          <h1
            className={`text-3xl font-bold ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Loading Dashboard...
          </h1>
        </main>
        <Footer />
      </ThemeLayout>
    );
  }

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="mb-10">

          <h1
            className={`text-4xl md:text-5xl font-bold font-serif ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Your Property at a Glance
          </h1>

          <p
            className={`mt-3 ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Tracking real-time guest sentiments and monthly stay volume.
          </p>

        </div>

        {/* Metric Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className={`${cardStyle} rounded-3xl p-6`}>
            <p className="text-sm text-[#61554E]">
              Total Stays Tracked
            </p>

            <h2
              className={`text-4xl font-bold mt-4 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              {stats.total_reviews}
            </h2>
          </div>

          <div className={`${cardStyle} rounded-3xl p-6`}>
            <p className="text-sm text-[#61554E]">
              Happy Guests
            </p>

            <h2
              className={`text-4xl font-bold mt-4 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              {stats.positive}
            </h2>
          </div>

          <div className={`${cardStyle} rounded-3xl p-6`}>
            <p className="text-sm text-[#61554E]">
              Constructive Notes
            </p>

            <h2
              className={`text-4xl font-bold mt-4 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              {stats.negative}
            </h2>
          </div>

          <div className={`${cardStyle} rounded-3xl p-6`}>
            <p className="text-sm text-[#61554E]">
              Mixed Feedback
            </p>

            <h2
              className={`text-4xl font-bold mt-4 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              {stats.neutral}
            </h2>
          </div>

        </div>

        {/* Sentiments + Trends */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* Guest Sentiments */}

          <div className={`${cardStyle} rounded-3xl p-6`}>

            <h2
              className={`text-xl font-semibold mb-5 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              Guest Sentiments
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between">
                  <span>Positive</span>
                  <span>{stats.positive}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 mt-2 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#C85A32] h-3 rounded-full"
                    style={{
                      width: `${
                        (stats.positive /
                          stats.total_reviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Neutral</span>
                  <span>{stats.neutral}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 mt-2 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#D3C7BC] h-3 rounded-full"
                    style={{
                      width: `${
                        (stats.neutral /
                          stats.total_reviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Negative</span>
                  <span>{stats.negative}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 mt-2 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#8B261E] h-3 rounded-full"
                    style={{
                      width: `${
                        (stats.negative /
                          stats.total_reviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Review Frequency */}

          <div className={`${cardStyle} rounded-3xl p-6`}>

            <h2
              className={`text-xl font-semibold mb-5 ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
            >
              Review Frequency
            </h2>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Today</span>
                  <span>{trends.today}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#C85A32] h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        trends.today * 10,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>This Week</span>
                  <span>{trends.this_week}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#D3C7BC] h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        trends.this_week * 10,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>This Month</span>
                  <span>{trends.this_month}</span>
                </div>

                <div
                  className={`w-full rounded-full h-3 ${
                    darkMode
                      ? "bg-[#3A302A]"
                      : "bg-[#F3ECE3]"
                  }`}
                >
                  <div
                    className="bg-[#8B261E] h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        trends.this_month * 10,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default Dashboard;