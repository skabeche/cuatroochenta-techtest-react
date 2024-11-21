import { Outlet } from "react-router-dom"
import LangSwitcher from "@/components/LangSwitcher"

export default function AuthLayout() {

  return (
    <div className="auth-layout">
      <LangSwitcher />
      <Outlet />
    </div>
  )
}
