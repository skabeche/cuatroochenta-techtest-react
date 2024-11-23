import { useState } from 'react';
import NavIcon from "@/components/NavIcon";
import NavPrimary from "@/partials/auth/NavPrimary";

export default function Sidebar({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="header">
        <button
          id="toggler"
          aria-label="Open menu"
          onClick={handleClick}
          className="toggler"
        >
          <NavIcon isOpen={isOpen} />
        </button>
      </div>

      <div className="underlay" onClick={handleClick}>
        <div className="wrapper">
          <NavPrimary />

          {children}
        </div>
      </div>
    </aside>
  )
}
