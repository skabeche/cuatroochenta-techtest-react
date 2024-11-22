import { Outlet } from "react-router-dom"
import PageCssClassManager from "@/components/PageCssClassManager"
import TopBar from "@/partials/TopBar"
import LangSwitcher from "@/partials/LangSwitcher"
import Button from "@/components/Button"
import { Logo } from "@/components/Logo"

export default function AuthLayout() {
  return (
    <>
    <PageCssClassManager />
    <div className="auth-layout">
      <header>
        <TopBar>
          <Logo />
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
    </>
  )
}
