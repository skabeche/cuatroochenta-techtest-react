export default function Input({ type = 'text', name, id, value, placeholder, autoComplete, required, onChange, className = '' }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      onChange={onChange}
      className={`input-${type} ${className}`}
    />
  );
}
