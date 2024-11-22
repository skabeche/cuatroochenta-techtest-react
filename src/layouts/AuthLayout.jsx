import { Outlet } from "react-router-dom"
import PageCssClassManager from "@/components/PageCssClassManager"
import TopBar from "@/partials/TopBar"
import NavSecondary from "@/partials/auth/NavSecondary"
import { Logo } from "@/components/Logo"

export default function AuthLayout() {
  return (
    <>
    <PageCssClassManager />
    <div className="auth-layout">
      <header>
        <TopBar>
          <Logo />
          <NavSecondary />
        </TopBar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}
