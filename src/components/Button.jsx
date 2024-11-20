export default function Button({ type = 'submit', className = '', disabled = false, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
