import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="text-cyan-400 font-semibold">
            About StayInsight AI
          </span>

          <h1 className="text-5xl font-bold mt-4">
            Turning Guest Feedback
            <span className="text-cyan-400"> Into Better Experiences</span>
          </h1>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            StayInsight AI is an intelligent guest feedback platform designed
            specifically for homestays and eco-tourism businesses. It helps
            property owners understand guest sentiment, identify recurring
            issues, and make smarter decisions using AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white/5 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Our Mission
            </h3>

            <p className="text-slate-400 mt-4">
              Help hospitality businesses transform scattered guest reviews
              into meaningful insights that improve customer satisfaction and
              operational efficiency.
            </p>
          </div>

          <div className="bg-white/5 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              AI Powered
            </h3>

            <p className="text-slate-400 mt-4">
              StayInsight AI leverages Natural Language Processing and Large
              Language Models to analyze reviews, classify sentiment, detect
              themes, and generate actionable recommendations.
            </p>
          </div>

          <div className="bg-white/5 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Future Vision
            </h3>

            <p className="text-slate-400 mt-4">
              Our long-term vision is to provide real-time review monitoring,
              AI-generated responses, predictive guest satisfaction analytics,
              and business intelligence dashboards.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">

          <h2 className="text-3xl font-bold">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            <div className="bg-slate-900 p-4 rounded-xl text-center">
              React
            </div>

            <div className="bg-slate-900 p-4 rounded-xl text-center">
              Tailwind CSS
            </div>

            <div className="bg-slate-900 p-4 rounded-xl text-center">
              Gemini API
            </div>

            <div className="bg-slate-900 p-4 rounded-xl text-center">
              Python Backend
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;