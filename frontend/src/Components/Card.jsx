import { Link } from "react-router-dom";

function Card({ title, description, link }) {
  return (
    <Link
      to={link}
      className="block h-full"
      aria-label={title}
    >
      <div
        className="
        h-full
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        p-6
        shadow-2xl
        shadow-cyan-500/10
        hover:border-cyan-400/40
        hover:bg-white/10
        hover:-translate-y-2
        transition-all
        duration-300
      "
      >
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-slate-400 mt-3">
          {description}
        </p>

        <div className="mt-6 text-cyan-400 font-medium">
          Explore →
        </div>
      </div>
    </Link>
  );
}

export default Card;

