import { useTheme } from "../../context/ThemeContext";

/**
 * Input Component
 * Props:
 * - label
 * - placeholder
 * - value
 * - onChange
 */

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  const { darkMode } = useTheme();

  return (
    <div className="w-full">

      {label && (
        <label
          className={`block mb-2 ${
            darkMode
              ? "text-slate-300"
              : "text-slate-700"
          }`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full
          rounded-xl
          px-4 py-3
          outline-none
          transition-all
          duration-300
          ${
            darkMode
              ? "bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400"
              : "bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500"
          }
        `}
      />

    </div>
  );
}

export default Input;