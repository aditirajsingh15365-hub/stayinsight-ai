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
      title: "Understand the Vibe",
      description:
        "Uncover the subtle emotions behind every review. Know exactly how your guests feel about the welcome, the ambiance, and the details.",
      link: "/review-analyzer",
    },
    {
      title: "Elevate Every Stay",
      description:
        "Get tailored, practical suggestions for improving your guest experience, curated from hundreds of specific guest insights.",
      link: "/ai-insights",
    },
    {
      title: "Get the Full Story, Fast",
      description:
        "Save hours by getting a comprehensive, balanced snapshot of your monthly feedback. Focus on hosting, not data entry.",
      link: "/dashboard",
    },
  ];

  return (
    <ThemeLayout>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <div className="text-center mb-14">
          
          {/* Section Heading */}

          <h2
            className={`mt-4 text-4xl md:text-5xl font-bold font-serif ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Hospitality-First Insights.
          </h2>

          {/* Section Description */}

          <p
            className={`mt-5 max-w-3xl mx-auto text-lg leading-relaxed ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Transform guest feedback into meaningful actions.
            Discover what guests truly value, identify
            opportunities for improvement, and create
            experiences that keep visitors coming back.
          </p>

        </div>

        {/* Feature Cards */}

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