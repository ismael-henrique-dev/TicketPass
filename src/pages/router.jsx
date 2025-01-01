import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layouts/default-layout"
import { Home } from "./home"
import { Login } from "./login"
import { Register } from "./register"
import { MyTickets } from "./my-tickets"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
