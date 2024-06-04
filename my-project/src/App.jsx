import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/AdministrarMascota'
import AgregarMascota from './components/AgregarMascota'
import Consultar from './components/Consultar'

import './App.css'


function App() {
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/agregarMascota" element={<AgregarMascota/>} />
    <Route path="/ver" element={<Consultar/>} />
    </Routes>    
    </>
  )
}

export default App

