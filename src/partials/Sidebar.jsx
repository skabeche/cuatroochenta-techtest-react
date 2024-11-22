import { useState } from 'react';
import NavIcon from "@/components/NavIcon";
import { House } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { Link } from "react-router-dom";

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

      <div className="wrapper">
        <nav className="nav-main">
          <ul>
            <li>
              <Link to="/dashboard" accessKey="0">
                <House size={20} strokeWidth={1.5} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" accessKey="1">
                <MessageSquareMore size={20} strokeWidth={1.5} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {children}
      </div>
    </aside>
  )
}
