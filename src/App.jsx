import React from 'react';
import Login from './assets/pages/Login'
import Cadastro from './assets/pages/Cadastro'
import Home from './assets/pages/Home'
import Alunos from './assets/pages/Alunos'
import Turmas from './assets/pages/Turmas'
import Perfil from './assets/pages/Perfil'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div> 
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} /> 
            <Route path="/Alunos" element={<Alunos />} />
            <Route path="/Turmas" element={<Turmas />} /> 
            <Route path="/Perfil" element={<Perfil />} />
            {/* (localStorage.getItem('token')) */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
