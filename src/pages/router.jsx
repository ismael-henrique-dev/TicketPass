import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layouts/defaultLayout"
import { Home } from "./home"
import { Login } from "./login"
import { Register } from "./register"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
