import { Outlet } from "react-router-dom"
import TopBar from "@/partials/TopBar"
import LangSwitcher from "@/partials/LangSwitcher"
import Button from "@/components/Button"
import PageCssClassManager from "@/components/PageCssClassManager"

export default function AuthLayout() {
  return (
    <>
    <PageCssClassManager />
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
    </>
  )
}
