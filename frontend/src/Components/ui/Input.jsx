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
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-slate-300">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          bg-slate-900/50
          border border-white/10
          rounded-xl
          px-4 py-3
          text-white
          outline-none
          focus:border-cyan-400
        "
      />
    </div>
  );
}

export default Input;