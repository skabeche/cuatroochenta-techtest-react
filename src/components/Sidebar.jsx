import { useState } from 'react';
import NavIcon from "@/components/NavIcon";

export default function Sidebar({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar">

      <div>
        <button
          id="toggler"
          aria-label="Open menu"
          onClick={handleClick}
          className="toggler"
        >
          <NavIcon isOpen={isOpen} />
        </button>
      </div>

      <div className={`wrapper ${isOpen ? 'open' : 'closed'}`}>
        <nav className="nav-main">
          <a href="/contact">Contact</a>
        </nav>

        {children}
      </div>
    </aside>
  )
}
