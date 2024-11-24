import LangSwitcher from "@/partials/LangSwitcher";
import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";

export default function NavSecondary() {
  const { logout } = useAuth();

  return (
    <nav className="nav-secondary">
      <ul>
        <li>
          <Button onClick={logout}>Logout</Button>
        </li>
        <li>
          <LangSwitcher />
        </li>
      </ul>
    </nav>
  );
}
