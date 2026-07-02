import { useTheme } from "../../context/ThemeContext";

/**
 * Loader Component
 */

function Loader() {
  const { darkMode } = useTheme();

  return (
    <div className="flex justify-center items-center py-10">
      <div
        className={`
          w-10
          h-10
          border-4
          border-t-transparent
          rounded-full
          animate-spin
          ${
            darkMode
              ? "border-[#C85A32]"
              : "border-[#C85A32]"
          }
        `}
      />
    </div>
  );
}

export default Loader;