import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`border-t py-8 text-center transition-all duration-300 ${
        darkMode
          ? "border-[#3A302A] bg-[#221C18] text-[#C8B8A6]"
          : "border-[#E8DDD2] bg-[#FAF6F0] text-[#61554E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <h3
          className={`font-serif text-xl font-semibold mb-3 ${
            darkMode
              ? "text-[#F7F1EA]"
              : "text-[#26211E]"
          }`}
        >
          StayInsight{" "}
          <span className="text-[#C85A32]">
            AI
          </span>
        </h3>

        <p>
          © 2026 StayInsight AI. All Rights Reserved.
        </p>

        <p className="mt-2 text-sm">
          Helping homestays and eco-lodges create unforgettable guest experiences.
        </p>

      </div>
    </footer>
  );
}

export default Footer;