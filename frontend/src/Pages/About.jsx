import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();

  const cardStyle = darkMode
    ? "bg-white/5 border border-white/10"
    : "bg-white border border-slate-200 shadow-lg";

  return (
    <ThemeLayout>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <div className="text-center">

          <span className="text-cyan-500 font-semibold">
            About StayInsight AI
          </span>

          <h1
            className={`text-5xl font-bold mt-4 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Turning Guest Feedback
            <span className="text-cyan-500">
              {" "}Into Better Experiences
            </span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            StayInsight AI is an intelligent guest feedback platform designed
            specifically for homestays and eco-tourism businesses. It helps
            property owners understand guest sentiment, identify recurring
            issues, and make smarter decisions using AI-powered insights.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className={`${cardStyle} rounded-2xl p-6`}>
            <h3 className="text-xl font-semibold text-cyan-500">
              Our Mission
            </h3>

            <p
              className={`mt-4 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Help hospitality businesses transform scattered guest reviews
              into meaningful insights that improve customer satisfaction and
              operational efficiency.
            </p>
          </div>

          <div className={`${cardStyle} rounded-2xl p-6`}>
            <h3 className="text-xl font-semibold text-cyan-500">
              AI Powered
            </h3>

            <p
              className={`mt-4 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              StayInsight AI leverages Natural Language Processing and Large
              Language Models to analyze reviews, classify sentiment, detect
              themes, and generate actionable recommendations.
            </p>
          </div>

          <div className={`${cardStyle} rounded-2xl p-6`}>
            <h3 className="text-xl font-semibold text-cyan-500">
              Future Vision
            </h3>

            <p
              className={`mt-4 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Our long-term vision is to provide real-time review monitoring,
              AI-generated responses, predictive guest satisfaction analytics,
              and business intelligence dashboards.
            </p>
          </div>

        </div>

        {/* Technology Stack */}
        <div
          className={`mt-16 rounded-2xl p-8 ${
            darkMode
              ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
              : "bg-white border border-slate-200 shadow-lg"
          }`}
        >

          <h2
            className={`text-3xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            {["React", "Tailwind CSS", "Gemini API", "Python Backend"].map(
              (tech) => (
                <div
                  key={tech}
                  className={`p-4 rounded-xl text-center font-medium ${
                    darkMode
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {tech}
                </div>
              )
            )}

          </div>

        </div>

      </section>

      <Footer />
    </ThemeLayout>
  );
}

export default About;