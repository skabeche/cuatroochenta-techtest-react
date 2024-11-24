import { useTranslation } from "react-i18next";
import LangSwitcher from "@/partials/LangSwitcher";
import Button from "@/components/Button";
import AuthService from "@/services/AuthService";

export default function NavSecondary() {
  const { t, i18n } = useTranslation();
  const { logout } = AuthService();

  return (
    <nav className="nav-secondary">
      <ul>
        <li>
          <Button onClick={logout}>{t("navs.secondary.logout")}</Button>
        </li>
        <li>
          <LangSwitcher />
        </li>
      </ul>
    </nav>
  );
}
