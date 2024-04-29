import React from 'react';
import Login from './assets/pages/Login'
import Cadastro from './assets/pages/Cadastro'
import Home from './assets/pages/Home'
import Alunos from './assets/pages/Alunos'
import Turmas from './assets/pages/Turmas'
import Perfil from './assets/pages/Perfil'
import IDEV2 from './assets/pages/IDEV2'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} /> 
            <Route path="/Alunos" element={<Alunos />} />
            <Route path="/Turmas" element={<Turmas />} /> 
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/IDEV2" element={<IDEV2 />} />
            {/* (localStorage.getItem('token')) */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
