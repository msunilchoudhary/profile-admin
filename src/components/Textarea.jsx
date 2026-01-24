const Textarea = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <textarea {...props} rows="4" className="input" />
  </div>
);

export default Textarea;