import React from 'react';
import '../../App.jsx';

function Home() {
  return (
    <div>

      <div className='corpo3'>

        <header className='NavBar'>
          <h3>Carômetro</h3>
          <a className='aNavBar' href="Home">Home</a>
          <a className='aNavBar' href="Login">Login</a>
          <a className='aNavBar' href="Cadastro">Cadastro</a>
          <a className='aNavBar' href="Alunos">Alunos</a>
          <a className='aNavBar' href="Turmas">Turmas</a>
          <a className='aNavBar' href="Perfil">Perfil</a>
        </header>

        <div className='AreaBusca'>
          
          <div className='AreaImagens2'>
            <img src="../../../components/img/gambiarra.png" width={"75vw"} className='gambiarra' />
            <img src="../../../components/img/senai.png" width={"570vw"} className='senai' />
            <img src="../../../components/img/perfil.png" className='perfil' />
          </div>

          <div className='nomeEscolaHome'>
            <h3>SENAI Shunji Nishimura</h3>
          </div>

          <div className='inputHomeDiv'>
            <input className="inputHome" type="text" name="busca" id="bucar" placeholder='Buscar no Carômetro...' />
          </div>
        </div>

        <div className='AreaBuscaTurmas'>

        </div>

      </div>

    </div>
  );
}

export default Home;