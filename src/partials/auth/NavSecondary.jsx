import LangSwitcher from "@/partials/LangSwitcher";
import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";

export default function NavSecondary() {
  const { logout } = useAuth();

  return (
    <nav className="nav-secondary">
      <Button onClick={logout}>Logout</Button>
      <LangSwitcher />
    </nav>
  );
}
