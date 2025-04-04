import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>

      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
