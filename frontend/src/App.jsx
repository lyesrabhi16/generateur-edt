import './App.css'
import './navbar.css'
import Admin from './Admin/adminPage'
import Logo from './login/login'
import AdminPage from './Admin/adminPage'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='w-screen min-w-full h-full min-h-screen ' >
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App