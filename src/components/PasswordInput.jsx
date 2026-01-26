const PasswordInput = ({
  label,
  showPassword,
  setShowPassword,
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-2.5 text-sm text-gray-500"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  </div>
);

export default PasswordInput;