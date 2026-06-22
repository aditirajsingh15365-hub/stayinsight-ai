import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function AIInsights() {
const { darkMode } = useTheme();

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

const cardStyle = darkMode
? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/10"
: "bg-white border border-slate-200 shadow-lg";

return ( <ThemeLayout> <Navbar />

  <main className="max-w-7xl mx-auto px-6 py-12">

    {/* Header */}
    <div className="mb-10">

      <span className="text-cyan-500 font-semibold">
        AI Powered Intelligence
      </span>

      <h1
        className={`text-4xl md:text-5xl font-bold mt-3 ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        AI Insights Engine
      </h1>

      <p
        className={`mt-4 max-w-3xl ${
          darkMode
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        Discover guest satisfaction trends, recurring strengths,
        operational challenges, and AI-generated recommendations
        from customer feedback.
      </p>

    </div>

    {/* Summary */}
    <div className={`${cardStyle} rounded-3xl p-8`}>

      <h2 className="text-2xl font-bold text-cyan-500 mb-3">
        Guest Experience Summary
      </h2>

      <p
        className={`leading-relaxed ${
          darkMode
            ? "text-slate-300"
            : "text-slate-700"
        }`}
      >
        {insightsData.summary}
      </p>

    </div>

    {/* Main Cards */}
    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {/* Strengths */}
      <div
        className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
      >
        <h2 className="text-xl font-bold text-green-500 mb-5">
          ✅ Top Strengths
        </h2>

        <ul
          className={`space-y-3 ${
            darkMode
              ? "text-slate-300"
              : "text-slate-700"
          }`}
        >
          {insightsData.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Issues */}
      <div
        className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
      >
        <h2 className="text-xl font-bold text-yellow-500 mb-5">
          ⚠ Common Issues
        </h2>

        <ul
          className={`space-y-3 ${
            darkMode
              ? "text-slate-300"
              : "text-slate-700"
          }`}
        >
          {insightsData.issues.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div
        className={`${cardStyle} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300`}
      >
        <h2 className="text-xl font-bold text-cyan-500 mb-5">
          🚀 AI Recommendations
        </h2>

        <ul
          className={`space-y-3 ${
            darkMode
              ? "text-slate-300"
              : "text-slate-700"
          }`}
        >
          {insightsData.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

    </div>

    {/* Metrics */}
    <div className={`${cardStyle} rounded-3xl p-8 mt-10`}>

      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        AI Confidence Metrics
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <p className="text-slate-400">
            Sentiment Accuracy
          </p>

          <h3 className="text-4xl font-bold text-cyan-500 mt-2">
            {insightsData.metrics.sentimentAccuracy}%
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Theme Detection
          </p>

          <h3 className="text-4xl font-bold text-green-500 mt-2">
            {insightsData.metrics.themeDetection}%
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Recommendation Quality
          </p>

          <h3 className="text-4xl font-bold text-yellow-500 mt-2">
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
