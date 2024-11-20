export default function NavIcon({ isOpen = false }) {
  return (
    <div className="nav-icon">
      <span className={`block transition-all duration-300 ease-out h-[1px] w-12 rounded-sm ${isOpen ? 'w-10 rotate-45 translate-y-2 bg-primary-500' : 'bg-secondary-500 -translate-y-[1px]'}`}></span>
      <span className={`block transition-all duration-300 ease-out h-[1px] w-12 rounded-sm my-2 ${isOpen ? 'opacity-0' : 'bg-secondary-500 opacity-100'}`}></span>
      <span className={`block transition-all duration-300 ease-out h-[1px] w-12 rounded-sm ${isOpen ? 'w-10 -rotate-45 -translate-y-2 bg-primary-500' : 'bg-secondary-500 translate-y-[1px]'}`}></span>
    </div>
  );
}