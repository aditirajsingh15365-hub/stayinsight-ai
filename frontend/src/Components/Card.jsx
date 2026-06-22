import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Card({ title, description, link }) {
const { darkMode } = useTheme();

return ( <Link
   to={link}
   className="block h-full"
   aria-label={title}
 >
<div
className={`h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2
        ${
          darkMode
            ? `
bg-white/5
backdrop-blur-xl
border border-white/10
shadow-2xl
shadow-cyan-500/10
hover:border-cyan-400/40
hover:bg-white/10
`            :`
bg-white
border border-slate-200
shadow-lg
hover:border-cyan-400
hover:shadow-xl
`
        }`}
>
<h3
className={`text-xl font-semibold ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
>
{title} </h3>

    <p
      className={`mt-3 ${
        darkMode
          ? "text-slate-400"
          : "text-slate-600"
      }`}
    >
      {description}
    </p>

    <div className="mt-6 text-cyan-500 font-medium">
      Explore →
    </div>
  </div>
</Link>


);
}

export default Card;
