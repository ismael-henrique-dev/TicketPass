import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layouts/defaultLayout"
import { Home } from "./home"
import { Login } from "./login"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
