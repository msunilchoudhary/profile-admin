const Input = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <input {...props} className="input" />
  </div>
);

export default Input;