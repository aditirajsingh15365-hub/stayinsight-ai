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
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        darkMode
          ? "bg-slate-950/80 border-white/10"
          : "bg-white/80 border-slate-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-2xl font-extrabold tracking-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              StayInsight <span className="text-cyan-500">AI</span>
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
                    ? "text-cyan-500 border-b-2 border-cyan-500 pb-1 font-medium transition-all duration-300"
                    : `${
                        darkMode
                          ? "text-slate-300"
                          : "text-slate-700"
                      } hover:text-cyan-500 hover:scale-105 font-medium transition-all duration-300`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "border-white/10 text-white hover:border-cyan-400"
                  : "border-slate-300 text-slate-900 hover:border-cyan-500"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>

          {/* CTA Button */}
          {/* CTA Button */}
          <Link
             to="/login"
             className="hidden md:block px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-medium text-white"
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
                  ? "text-cyan-500 text-sm font-medium"
                  : `${
                      darkMode
                        ? "text-slate-300"
                        : "text-slate-700"
                    } text-sm hover:text-cyan-500 transition-colors duration-300`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className={`px-3 py-1 rounded-lg text-sm border ${
              darkMode
                ? "border-white/10 text-white"
                : "border-slate-300 text-slate-900"
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