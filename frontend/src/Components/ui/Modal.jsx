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
        px-4
      "
    >
      <div
        className={`
          w-full
          max-w-md
          rounded-3xl
          p-8
          transition-all
          duration-300
          ${
            darkMode
              ? `
                bg-[#312924]
                border border-[#3A302A]
                text-[#F7F1EA]
              `
              : `
                bg-white
                border border-[#EFE5DA]
                text-[#26211E]
                shadow-sm
                shadow-[#26211E]/5
              `
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
            rounded-lg
            bg-[#C85A32]
            hover:bg-[#B44D28]
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