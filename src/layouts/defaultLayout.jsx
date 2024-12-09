import { Outlet } from "react-router-dom"

export function DefaultLayout() {
  return (
    <div>
      <header>Teste</header>
      <Outlet />  
    </div>
  )
}
