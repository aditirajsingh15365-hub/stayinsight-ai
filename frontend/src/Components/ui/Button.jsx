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
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary: darkMode
      ? `
        bg-[#C85A32]
        hover:bg-[#B44D28]
        text-white
      `
      : `
        bg-[#C85A32]
        hover:bg-[#B44D28]
        text-white
      `,

    secondary: darkMode
      ? `
        bg-[#312924]
        border border-[#3A302A]
        text-[#F7F1EA]
        hover:bg-[#3A302A]
      `
      : `
        bg-[#F3ECE3]
        border border-[#E8DDD2]
        text-[#26211E]
        hover:bg-[#E9DFD4]
      `,
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