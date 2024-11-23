export default function NavIcon({ isOpen = false }) {
  return (
    <div className={`nav-icon ${isOpen ? 'open' : 'closed'}`}>
      <span className="bar bar-top"></span>
      <span className="bar bar-middle"></span>
      <span className="bar bar-bottom"></span>
    </div>
  );
}
