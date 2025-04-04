import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Wallet from './pages/Wallet'
import EarnMoney from './pages/EarnMoney'
import Transaction from './pages/Transaction'
import ProtectedRoute from './security/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        <Route path='/about'
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>}
        />
        <Route path='/wallet'
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>}
        />
        <Route path='/earn-money'
          element={
            <ProtectedRoute>
              <EarnMoney />
            </ProtectedRoute>}
        />
        <Route path='/transaction'
          element={
            <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>}
        />
      </Route>

      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
