import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0B1F4D",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>
        StayInsight <span style={{ color: "#4FD1C5" }}>AI</span>
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/ai-insights" style={linkStyle}>
          AI Insights
        </Link>

        <Link to="/review-analyzer" style={linkStyle}>
          Review Analyzer
        </Link>

        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;