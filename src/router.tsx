import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'
import { Account, ForgotPasswordSendEmail, Home, Login, MyTickets, Register } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/auth/login'
          element={<Login />}
        />
        <Route
          path='/auth/register'
          element={<Register />}
        />
        <Route
          path='/auth/forgot-password'
          element={<ForgotPasswordSendEmail />}
        />
        <Route
          path=''
          element={<DefaultLayout />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/my-tickets'
            element={<MyTickets />}
          />
          <Route
            path='/account'
            element={<Account />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
