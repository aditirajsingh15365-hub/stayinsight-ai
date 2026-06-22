import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { darkMode } = useTheme();

  const features = [
    {
      title: "Sentiment Analysis",
      description:
        "Automatically detect guest emotions from reviews.",
      link: "/review-analyzer",
    },
    {
      title: "AI Recommendations",
      description:
        "Receive AI-powered suggestions to improve guest experience.",
      link: "/ai-insights",
    },
    {
      title: "Review Summarization",
      description:
        "Instantly summarize praise and complaints.",
      link: "/dashboard",
    },
  ];

  return (
    <ThemeLayout>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <div className="text-center mb-12">

          <span
            className={`font-semibold ${
              darkMode
                ? "text-cyan-400"
                : "text-cyan-600"
            }`}
          >
            AI Powered Features
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            AI Integrated Tools
          </h2>

          <p
            className={`mt-4 max-w-2xl mx-auto text-lg ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Analyze guest feedback, discover trends, and generate
            actionable insights to improve hospitality experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </section>

      <Footer />
    </ThemeLayout>
  );
}

export default Home;