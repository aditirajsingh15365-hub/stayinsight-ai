import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "AI Insights", path: "/ai-insights" },
    { name: "Review Analyzer", path: "/review-analyzer" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              StayInsight <span className="text-cyan-400">AI</span>
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
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1 font-medium transition-all duration-300"
                    : "text-slate-300 hover:text-cyan-400 hover:scale-105 font-medium transition-all duration-300"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/review-analyzer"
            className="hidden md:block px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-medium text-white"
          >
            Analyze Reviews
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-4 mt-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 text-sm font-medium"
                  : "text-slate-300 text-sm hover:text-cyan-400 transition-colors duration-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;