export default function Label({ htmlFor, value, className, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
    >
      {value ? value : children}
    </label>
  );
}
