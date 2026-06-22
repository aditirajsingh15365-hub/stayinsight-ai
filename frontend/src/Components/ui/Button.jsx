import { useTheme } from "../../context/ThemeContext";

/**
 * Button Component
 * Props:
 * - children: button text
 * - onClick: click handler
 * - variant: primary | secondary
 */

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const { darkMode } = useTheme();

  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white",

    secondary: darkMode
      ? "border border-white/10 text-white hover:border-cyan-400 hover:bg-white/5"
      : "border border-slate-300 text-slate-900 hover:border-cyan-500 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;