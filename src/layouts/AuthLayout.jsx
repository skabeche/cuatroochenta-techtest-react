import { Outlet } from "react-router-dom"
import TopBar from "@/partials/TopBar"
import LangSwitcher from "@/partials/LangSwitcher"
import Button from "@/components/Button"

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <header>
        <TopBar>
          <nav>
            <Button>Logout</Button>
            <LangSwitcher />
          </nav>
        </TopBar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
