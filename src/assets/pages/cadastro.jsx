import React from 'react';
import '../../App.jsx';

function Cadastro() {
  return (
    <div className='corpo'>
      <div c>
        <label htmlFor="" className="titulosInput" id="Csenha">
          Confirmar Senha:
        </label>
        <input type="password" name="Csenha" id="Csenha" />
      </div>
    </div>
  );
}

export default Cadastro;