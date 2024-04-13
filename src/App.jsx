import React from 'react';
import Login from './assets/pages/login'
import Cadastro from './assets/pages/cadastro'
import Home from './assets/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
