import { Outlet } from "react-router-dom"
import TopBar from "@/partials/TopBar"
import LangSwitcher from "@/partials/LangSwitcher"

export default function GuestLayout() {
  return (
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
  )
}
