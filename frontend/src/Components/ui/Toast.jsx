/**
 * Toast Component
 * Props:
 * - message
 */

function Toast({ message }) {
  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        bg-[#C85A32]
        text-white
        px-5
        py-3
        rounded-xl
        shadow-lg
        shadow-[#26211E]/10
        animate-in
      "
    >
      {message}
    </div>
  );
}

export default Toast;