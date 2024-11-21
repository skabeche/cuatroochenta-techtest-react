import { Outlet } from "react-router-dom"
import LangSwitcher from "@/components/LangSwitcher"

export default function GuestLayout() {

  return (
    <div className="guest-layout">
      <LangSwitcher />
      <Outlet />
    </div>
  )
}
