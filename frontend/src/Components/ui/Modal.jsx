import { useTheme } from "../../context/ThemeContext";

/**
 * Modal Component
 * Props:
 * - isOpen
 * - onClose
 * - children
 */

function Modal({
  isOpen,
  onClose,
  children,
}) {
  const { darkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className={`
          w-full
          max-w-md
          rounded-3xl
          p-8
          ${
            darkMode
              ? "bg-slate-900 border border-white/10 text-white"
              : "bg-white border border-slate-300 text-slate-900 shadow-xl"
          }
        `}
      >
        {children}

        <button
          onClick={onClose}
          className="
            mt-6
            px-5
            py-2
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            text-white
            transition-all
            duration-300
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;