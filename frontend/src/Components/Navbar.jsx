import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "AI Insights", path: "/ai-insights" },
    { name: "Review Analyzer", path: "/review-analyzer" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        darkMode
          ? "bg-[#221C18]/95 border-[#3A302A]"
          : "bg-[#FAF6F0]/90 border-[#E8DDD2]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-2xl font-bold tracking-tight font-serif ${
                darkMode ? "text-[#F7F1EA]" : "text-[#26211E]"
              }`}
            >
              StayInsight{" "}
              <span className="text-[#C85A32]">
                AI
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C85A32] border-b-2 border-[#C85A32] pb-1 font-medium transition-all duration-300"
                    : `${
                        darkMode
                          ? "text-[#C8B8A6]"
                          : "text-[#61554E]"
                      } hover:text-[#C85A32] font-medium transition-all duration-300`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                darkMode
                  ? "border-[#4A3D36] text-[#F7F1EA] hover:border-[#C85A32]"
                  : "border-[#E8DDD2] text-[#26211E] hover:border-[#C85A32]"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="
              hidden md:block
              px-5 py-2
              rounded-lg
              bg-[#C85A32]
              hover:bg-[#B44D28]
              transition-all
              duration-300
              font-medium
              text-white
            "
          >
            Log in
          </Link>

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-4 mt-4 items-center">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#C85A32] text-sm font-medium"
                  : `${
                      darkMode
                        ? "text-[#C8B8A6]"
                        : "text-[#61554E]"
                    } text-sm hover:text-[#C85A32] transition-colors duration-300`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className={`px-3 py-1 rounded-lg text-sm border ${
              darkMode
                ? "border-[#4A3D36] text-[#F7F1EA]"
                : "border-[#E8DDD2] text-[#26211E]"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;