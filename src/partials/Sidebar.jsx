import { useState } from 'react';
import NavIcon from "@/components/NavIcon";
import { House } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';

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
        <h1>Weather App</h1>
      </div>

      <div className="wrapper">
        <nav className="nav-main">
          <ul>
            <li>
              <a href="/contact" accessKey="0">
                <House size={20} strokeWidth={1.5} />
                Dashboard
              </a>
            </li>
            <li>
              <a href="/contact" accessKey="1">
                <MessageSquareMore size={20} strokeWidth={1.5} />
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {children}
      </div>
    </aside>
  )
}
