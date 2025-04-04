import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Wallet from './pages/Wallet'
import EarnMoney from './pages/EarnMoney'
import Transaction from './pages/Transaction'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/earn-money' element={<EarnMoney />} />
        <Route path='/transaction' element={<Transaction />} />
      </Route>

      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
