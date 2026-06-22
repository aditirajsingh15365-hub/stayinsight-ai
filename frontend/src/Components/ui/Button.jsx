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
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition";

  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white",

    secondary:
      "border border-white/10 hover:border-cyan-400 hover:bg-white/5 text-white",
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