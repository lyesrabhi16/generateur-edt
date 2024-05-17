import './App.css'
import './navbar.css'
import Logo from './login/login'
import AdminPage from './Admin/adminPage'
import EtudPage from './etud&ens/menuPage'
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='w-screen min-w-full h-full min-h-screen ' >
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/etu" element={<EtudPage />} />

      </Routes>
      <Toaster position='top-center'/>
    </div>
  )
}

export default App