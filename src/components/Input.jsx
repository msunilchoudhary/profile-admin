const Input = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <input {...props} className="input" />
    {error && <p className="text-[12px] text-red-500">{error}</p>}
  </div>
);

export default Input;