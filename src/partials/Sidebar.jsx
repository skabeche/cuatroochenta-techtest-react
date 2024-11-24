import { useState } from 'react';
import NavIcon from "@/components/NavIcon";
import NavPrimary from "@/partials/auth/NavPrimary";
import NavSecondary from "./auth/NavSecondary";

export default function Sidebar({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
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

      <div className="underlay">
        <div className="wrapper">
          <NavPrimary />

          <div onClick={handleClick}>
            {children}
          </div>

          <NavSecondary />
        </div>
      </div>
    </aside>
  )
}
