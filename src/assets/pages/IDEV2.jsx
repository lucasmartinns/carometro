import React from "react";
import "../../App.jsx";
import "../../App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Aluno from "../../../components/img/GIOVANI.png"

function IDEV2() {

    const alunos = Array(32).fill().map((_, index) => ({
        login: {
          id: (index + 1).toString() // Gera IDs únicos para cada aluno (de 1 a 16)
        },
        foto: {
          foto: Aluno // Define a foto do aluno
        },
        name: {
          nome: `Giovani`, 
          sobrenome: 'Canella de Souza'
        }
      }));

    return (

        <div className="corpo8">
            
            <header className='NavBar'>
                <h3>Carômetro</h3>
                <a className='aNavBar' href="Home">Home</a>
                <a className='aNavBar' href="/">Login</a>
                <a className='aNavBar' href="Cadastro">Cadastro</a>
                <a className='aNavBar' href="Alunos">Alunos</a>
                <a className='aNavBar' href="Turmas">Turmas</a>
            </header>

            <div className="TextoIDEV2">
                <div className="AreaImagens2">
                    <img src="../../../components/img/IDEVB.png" width={"75vw"} className='IDEVB' />
                    <div className="nomeIDEV2">
                        <h1>Desenvolvimento de Sistemas 2023 - IDEV2</h1>
                    </div>
                    <img src="../../../components/img/perfil.png" className='perfil' />
                </div>

            </div>
            <div className="listaAlunos"> {/* Container para a lista de alunos */}
          {/* Mapeia os dados de cada aluno e renderiza um componente para cada um */}
          {alunos.map((aluno) => (
            <div key={aluno.login.id} className="aluno"> {/* Componente para cada aluno */}
              {/* Define um link para a página individual do aluno */}
                <img src={aluno.foto.foto} alt="Aluno" className="alunoFoto"/>
                <p className='alunoNome'>{`${aluno.name.nome} ${aluno.name.sobrenome}`}</p>
            </div>
          ))}
        </div>



        </div>
    );
}

export default IDEV2;
