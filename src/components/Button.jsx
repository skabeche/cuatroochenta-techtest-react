export default function Button({ type = 'submit', className = '', processing, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={processing}
    >
      {children}
    </button>
  );
}
