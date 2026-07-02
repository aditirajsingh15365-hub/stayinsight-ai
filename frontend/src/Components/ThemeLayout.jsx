import { useTheme } from "../context/ThemeContext";

function ThemeLayout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? `
              min-h-screen
              bg-[#221C18]
              text-[#F7F1EA]
              transition-all
              duration-300
            `
          : `
              min-h-screen
              bg-[#FAF6F0]
              text-[#26211E]
              transition-all
              duration-300
            `
      }
    >
      {children}
    </div>
  );
}

export default ThemeLayout;