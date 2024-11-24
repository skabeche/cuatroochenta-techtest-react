import { useTranslation } from "react-i18next";
import { House } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';

export default function NavPrimary() {
  const { t, i18n } = useTranslation();
  return (
    <nav className="nav-primary">
      <ul>
        <li>
          <a href="/dashboard" accessKey="0">
            <House size={20} strokeWidth={1.5} />
            {t("navs.primary.dashboard")}
          </a>
        </li>
        <li>
          <a href="/contact" accessKey="1">
            <MessageSquareMore size={20} strokeWidth={1.5} />
            {t("navs.primary.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
