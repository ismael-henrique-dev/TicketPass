import { Outlet } from "react-router-dom"
import { Header } from "../components/ui"

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
