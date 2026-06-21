import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            AI-Powered Guest Feedback Intelligence
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Transform Guest Feedback
            <br />
            <span className="text-cyan-400">
              Into Actionable Insights
            </span>
          </h1>

          <p className="text-slate-400 mt-8 text-lg max-w-3xl mx-auto">
            StayInsight AI helps homestays and eco-tourism businesses
            understand guest sentiment, uncover recurring issues,
            and generate AI-powered recommendations from customer reviews.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <Link
              to="/review-analyzer"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
            >
              Start Analyzing
            </Link>

            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;