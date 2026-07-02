import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Card({ title, description, link }) {
  const { darkMode } = useTheme();

  return (
    <Link
      to={link}
      className="block h-full"
      aria-label={title}
    >
      <div
        className={`h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
          darkMode
            ? `
              bg-[#312924]
              border border-[#3A302A]
              shadow-sm
              shadow-black/20
              hover:border-[#C85A32]/40
            `
            : `
              bg-white
              border border-[#EFE5DA]
              shadow-sm
              shadow-[#26211E]/5
              hover:border-[#C85A32]/20
            `
        }`}
      >
        {/* Title */}

        <h3
          className={`text-2xl font-semibold font-serif ${
            darkMode
              ? "text-[#F7F1EA]"
              : "text-[#26211E]"
          }`}
          style={{
            fontFamily:
              "'Playfair Display', Georgia, serif",
          }}
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className={`mt-4 leading-relaxed ${
            darkMode
              ? "text-[#C8B8A6]"
              : "text-[#61554E]"
          }`}
        >
          {description}
        </p>

        {/* CTA */}

        <div className="mt-6 text-[#C85A32] font-medium">
          Learn More →
        </div>
      </div>
    </Link>
  );
}

export default Card;