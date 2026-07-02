import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();

  const cardStyle = darkMode
    ? "bg-[#312924] border border-[#3A302A]"
    : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5";

  return (
    <ThemeLayout>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero Section */}

        <div className="text-center">

          <span className="text-[#C85A32] font-semibold">
            About StayInsight AI
          </span>

          <h1
            className={`mt-4 text-5xl font-bold font-serif ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Helping Hosts Create
            <span className="text-[#C85A32]">
              {" "}Unforgettable Experiences
            </span>
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-relaxed ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            StayInsight AI is designed specifically for homestays,
            eco-lodges, and hospitality businesses that care deeply
            about guest experiences. We transform everyday guest
            feedback into meaningful insights that help hosts
            improve service quality, strengthen guest relationships,
            and build memorable stays.
          </p>

        </div>

        {/* Information Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className={`${cardStyle} rounded-3xl p-8`}>
            <h3
              className="text-2xl font-semibold font-serif text-[#C85A32]"
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              Our Mission
            </h3>

            <p
              className={`mt-4 leading-relaxed ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              Empower hospitality businesses with practical insights
              that improve guest satisfaction while preserving the
              warmth and authenticity that make every stay unique.
            </p>
          </div>

          <div className={`${cardStyle} rounded-3xl p-8`}>
            <h3
              className="text-2xl font-semibold font-serif text-[#C85A32]"
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              Intelligent Insights
            </h3>

            <p
              className={`mt-4 leading-relaxed ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              Our platform analyzes guest reviews, identifies
              recurring themes, highlights strengths, and
              surfaces improvement opportunities to help
              hosts make confident decisions.
            </p>
          </div>

          <div className={`${cardStyle} rounded-3xl p-8`}>
            <h3
              className="text-2xl font-semibold font-serif text-[#C85A32]"
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              Future Vision
            </h3>

            <p
              className={`mt-4 leading-relaxed ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              We envision a future where hospitality businesses
              can understand guest expectations in real time and
              continuously improve experiences through intelligent,
              actionable recommendations.
            </p>
          </div>

        </div>

        {/* Technology Stack */}

        <div
          className={`mt-16 rounded-3xl p-8 ${
            darkMode
              ? "bg-[#312924] border border-[#3A302A]"
              : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5"
          }`}
        >

          <h2
            className={`text-3xl font-bold font-serif ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Built With Modern Technology
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            {[
              "React",
              "Tailwind CSS",
              "Gemini API",
              "FastAPI",
            ].map((tech) => (
              <div
                key={tech}
                className={`p-4 rounded-xl text-center font-medium ${
                  darkMode
                    ? "bg-[#221C18] text-[#F7F1EA]"
                    : "bg-[#F3ECE3] text-[#26211E]"
                }`}
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </ThemeLayout>
  );
}

export default About;