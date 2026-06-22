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
        bg-cyan-500
        text-white
        px-5
        py-3
        rounded-xl
        shadow-xl
      "
    >
      {message}
    </div>
  );
}

export default Toast;