import LoaderIcon from "@/components/LoaderIcon";

export default function Button({ type = 'submit', className = '', isLoading = false, disabled = false, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={isLoading ? isLoading : disabled}
    >
      {isLoading ? <LoaderIcon /> : null}
      {children}
    </button>
  );
}
