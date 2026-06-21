import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const dashboardData = {
    totalReviews: 1245,
    positiveReviews: 980,
    negativeReviews: 185,
    satisfaction: 4.8,

    sentiment: {
      positive: 78,
      neutral: 15,
      negative: 7,
    },

    strengths: [
      "Friendly Staff",
      "Clean Rooms",
      "Scenic Location",
    ],

    complaints: [
      "WiFi Connectivity",
      "Slow Check-In",
      "Limited Parking",
    ],

    recommendations: [
      "Upgrade WiFi Network",
      "Improve Check-In Flow",
      "Add Parking Guidance",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-3">
            Track guest sentiment, satisfaction, and AI-powered recommendations.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
            <p className="text-slate-400 text-sm">Total Reviews</p>
            <h2 className="text-4xl font-bold mt-3">
              {dashboardData.totalReviews}
            </h2>
            <span className="text-green-400 text-sm">+15%</span>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
            <p className="text-slate-400 text-sm">Positive Reviews</p>
            <h2 className="text-4xl font-bold mt-3">
              {dashboardData.positiveReviews}
            </h2>
            <span className="text-green-400 text-sm">
              {dashboardData.sentiment.positive}%
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
            <p className="text-slate-400 text-sm">Negative Reviews</p>
            <h2 className="text-4xl font-bold mt-3">
              {dashboardData.negativeReviews}
            </h2>
            <span className="text-red-400 text-sm">
              {dashboardData.sentiment.negative}%
            </span>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">
            <p className="text-slate-400 text-sm">Guest Satisfaction</p>
            <h2 className="text-4xl font-bold mt-3">
              {dashboardData.satisfaction}/5
            </h2>
            <span className="text-cyan-400 text-sm">
              Excellent
            </span>
          </div>

        </div>

        {/* Middle Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* Sentiment Overview */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Sentiment Overview
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between">
                  <span>Positive</span>
                  <span>{dashboardData.sentiment.positive}%</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                  <div
                    className="bg-cyan-400 h-3 rounded-full"
                    style={{
                      width: `${dashboardData.sentiment.positive}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Neutral</span>
                  <span>{dashboardData.sentiment.neutral}%</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{
                      width: `${dashboardData.sentiment.neutral}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Negative</span>
                  <span>{dashboardData.sentiment.negative}%</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-3 mt-2">
                  <div
                    className="bg-red-400 h-3 rounded-full"
                    style={{
                      width: `${dashboardData.sentiment.negative}%`,
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-5">
              Review Trend
            </h2>

            <div className="h-48 rounded-2xl bg-slate-900/50 flex items-center justify-center text-slate-500">
              Recharts Integration Coming In Week 3
            </div>
          </div>

        </div>

        {/* AI Insights */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            AI Insights Panel
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Top Strengths
              </h3>

              <ul className="space-y-3 text-slate-300">
                {dashboardData.strengths.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Common Complaints
              </h3>

              <ul className="space-y-3 text-slate-300">
                {dashboardData.complaints.map((item) => (
                  <li key={item}>⚠ {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                AI Recommendations
              </h3>

              <ul className="space-y-3 text-slate-300">
                {dashboardData.recommendations.map((item) => (
                  <li key={item}>🚀 {item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;