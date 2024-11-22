import { House } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';

export default function NavPrimary() {
  return (
    <nav className="nav-primary">
      <ul>
        <li>
          <a href="/dashboard" accessKey="0">
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
  );
}
