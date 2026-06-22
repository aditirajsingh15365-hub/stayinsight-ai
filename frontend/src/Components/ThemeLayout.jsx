import { useTheme } from "../context/ThemeContext";

function ThemeLayout({ children }) {
const { darkMode } = useTheme();

return (
<div
className={
darkMode
? `             min-h-screen
            bg-gradient-to-b
            from-slate-950
            via-slate-950
            to-blue-950
            text-white
            transition-all
            duration-300
          `
: `             min-h-screen
            bg-gradient-to-b
            from-cyan-50
            via-white
            to-slate-100
            text-slate-900
            transition-all
            duration-300
          `
}
>
{children} </div>
);
}

export default ThemeLayout;
