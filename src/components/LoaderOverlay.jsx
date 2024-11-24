import LoaderIcon from "@/components/LoaderIcon";

export default function LoaderOverlay({ isLoading = false, children }) {
  return (
    <div className={`loader-overlay ${isLoading ? 'open' : 'closed'}`}>
      <span className="loader">
        {isLoading && <LoaderIcon />}
        {children}
      </span>
    </div>
  );
}
