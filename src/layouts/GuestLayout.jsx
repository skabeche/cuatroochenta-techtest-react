import { Outlet } from "react-router-dom"
import TopBar from "@/partials/TopBar"
import LangSwitcher from "@/partials/LangSwitcher"
import PageCssClassManager from "@/components/PageCssClassManager"

export default function GuestLayout() {
  return (
    <>
      <PageCssClassManager />
      <div className="guest-layout">
        <header>
          <TopBar>
            <LangSwitcher />
          </TopBar>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
