import { useTheme } from "../context/ThemeContext";

function Footer() {
const { darkMode } = useTheme();

return (
<footer
className={`border-t py-6 text-center transition-all duration-300 ${
        darkMode
          ? "border-slate-800 bg-slate-950 text-slate-500"
          : "border-slate-300 bg-white text-slate-600"
      }`}
> <div className="max-w-7xl mx-auto px-6"> <p>
© 2026 StayInsight AI. All Rights Reserved. </p>

    <p className="mt-2 text-sm">
      AI-Powered Guest Feedback Intelligence Platform
    </p>
  </div>
</footer>


);
}

export default Footer;
