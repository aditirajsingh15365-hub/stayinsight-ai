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
          className={`block mb-2 font-medium ${
            darkMode
              ? "text-[#C8B8A6]"
              : "text-[#61554E]"
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
          px-4
          py-3
          outline-none
          transition-all
          duration-300
          ${
            darkMode
              ? `
                bg-[#221C18]
                border border-[#3A302A]
                text-[#F7F1EA]
                placeholder:text-[#8B7B6E]
                focus:border-[#C85A32]
              `
              : `
                bg-white
                border border-[#E8DDD2]
                text-[#26211E]
                placeholder:text-[#A09082]
                focus:border-[#C85A32]
              `
          }
        `}
      />

    </div>
  );
}

export default Input;