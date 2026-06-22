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
        className="
          bg-slate-900
          border border-white/10
          rounded-3xl
          p-8
          w-full
          max-w-md
        "
      >
        {children}

        <button
          onClick={onClose}
          className="
            mt-6
            bg-cyan-500
            px-5
            py-2
            rounded-xl
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;