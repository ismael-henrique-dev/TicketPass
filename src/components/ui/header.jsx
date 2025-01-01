import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"

export function Header() {
  const isActiveLink = ({ isActive }) =>
    isActive
      ? "relative text-orange-500 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-1 after:bg-orange-500"
      : "relative text-black hover:text-orange-500"

  return (
    <header className="bg-zinc-100 flex justify-between px-6 py-4 m-2 rounded-md">
      <img src={logo} alt="logo" />
      <nav className="flex gap-11">
        <NavLink to="/" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="/my-tickets" className={isActiveLink}>
          Meus Bilhetes
        </NavLink>
        <NavLink to="/account" className={isActiveLink}>
          Conta
        </NavLink>
      </nav>
    </header>
  )
}
