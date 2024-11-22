export default function NavIcon({ isOpen = false }) {
  return (
    <div className={`nav-icon ${isOpen ? 'open' : 'closed'}`}>
      {/* <span className={`${isOpen ? 'w-10 rotate-45 translate-y-2 bg-primary-500' : 'bg-secondary-500 -translate-y-[1px]'}`}></span>
      <span className={`${isOpen ? 'opacity-0' : 'bg-secondary-500 opacity-100'}`}></span>
      <span className={`${isOpen ? 'w-10 -rotate-45 -translate-y-2 bg-primary-500' : 'bg-secondary-500 translate-y-[1px]'}`}></span> */}
      <span className="bar bar-top"></span>
      <span className="bar bar-middle"></span>
      <span className="bar bar-bottom"></span>
    </div>
  );
}