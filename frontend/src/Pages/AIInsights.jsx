import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AIInsights() {
  const insightsData = {
    summary:
      "Guest reviews indicate strong satisfaction with hospitality, cleanliness, and the scenic environment. The majority of visitors highlight friendly hosts and personalized experiences. Areas requiring attention include WiFi connectivity, parking guidance, and occasional delays during check-in.",

    strengths: [
      "Friendly Hosts",
      "Clean Rooms",
      "Great Food",
      "Scenic Location",
      "Personalized Hospitality",
    ],

    issues: [
      "WiFi Connectivity",
      "Check-In Delays",
      "Parking Information",
      "Limited Evening Activities",
    ],

    recommendations: [
      "Upgrade Internet Infrastructure",
      "Optimize Check-In Workflow",
      "Provide Parking Instructions",
      "Create Digital Guest Guide",
      "Introduce Activity Recommendations",
    ],

    metrics: {
      sentimentAccuracy: 94,
      themeDetection: 91,
      recommendationQuality: 89,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <span className="text-cyan-400 font-semibold">
            AI Powered Intelligence
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            AI Insights Engine
          </h1>

          <p className="text-slate-400 mt-4 max-w-3xl">
            Discover guest satisfaction trends, recurring strengths,
            operational challenges, and AI-generated recommendations
            from customer feedback.
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Guest Experience Summary
          </h2>

          <p className="text-slate-300 leading-relaxed">
            {insightsData.summary}
          </p>

        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Strengths */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-xl font-bold text-green-400 mb-5">
              ✅ Top Strengths
            </h2>

            <ul className="space-y-3 text-slate-300">
              {insightsData.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>

          {/* Issues */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-xl font-bold text-yellow-400 mb-5">
              ⚠ Common Issues
            </h2>

            <ul className="space-y-3 text-slate-300">
              {insightsData.issues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>

          {/* Recommendations */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-xl font-bold text-cyan-400 mb-5">
              🚀 AI Recommendations
            </h2>

            <ul className="space-y-3 text-slate-300">
              {insightsData.recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>

        </div>

        {/* Metrics */}
        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            AI Confidence Metrics
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <p className="text-slate-400">
                Sentiment Accuracy
              </p>

              <h3 className="text-4xl font-bold text-cyan-400 mt-2">
                {insightsData.metrics.sentimentAccuracy}%
              </h3>
            </div>

            <div>
              <p className="text-slate-400">
                Theme Detection
              </p>

              <h3 className="text-4xl font-bold text-green-400 mt-2">
                {insightsData.metrics.themeDetection}%
              </h3>
            </div>

            <div>
              <p className="text-slate-400">
                Recommendation Quality
              </p>

              <h3 className="text-4xl font-bold text-yellow-400 mt-2">
                {insightsData.metrics.recommendationQuality}%
              </h3>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default AIInsights;