import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="text-center">

          {/* Badge */}

          <span
            className={`
              inline-block
              px-3
              py-1
              rounded-lg
              text-sm
              font-medium
              border
              ${
                darkMode
                  ? "border-[#C85A32]/30 text-[#D97A57] bg-[#C85A32]/10"
                  : "border-[#C85A32]/20 text-[#C85A32] bg-[#FFF8F4]"
              }
            `}
          >
            Guest Experience Focused
          </span>

          {/* Heading */}

          <h1
            className={`
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              font-serif
              ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }
            `}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Craft{" "}
            <span className="text-[#C85A32]">
              Unforgettable
            </span>{" "}
            Stays
            <br />
            with Intelligent Feedback.
          </h1>

          {/* Subheading */}

          <p
            className={`
              mt-8
              text-lg
              max-w-3xl
              mx-auto
              leading-relaxed
              ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }
            `}
          >
            StayInsight AI empowers homestays and eco-lodges
            to understand exactly what guests love,
            uncovering the nuanced details that make a stay
            truly exceptional, while suggesting tailored
            improvements.
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">

            <Link
              to="/review-analyzer"
              className="
                px-8
                py-4
                rounded-lg
                bg-[#C85A32]
                hover:bg-[#B44D28]
                transition-all
                duration-300
                font-semibold
                text-white
              "
            >
              Start Analyzing →
            </Link>

            <Link
              to="/dashboard"
              className={`
                px-8
                py-4
                rounded-lg
                font-semibold
                transition-all
                duration-300
                ${
                  darkMode
                    ? "bg-[#312924] text-[#F7F1EA] hover:bg-[#3A302A]"
                    : "bg-[#F3ECE3] text-[#26211E] hover:bg-[#E9DFD4]"
                }
              `}
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