export default function Select({ value, className = '', disabled = false, options = [], onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
    >
      {options.map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
}
