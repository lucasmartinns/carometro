import React from "react";
import "../../App.jsx";
import "../../App.css";


function Perfil() {
    return (

        <div className="corpo5">
            
            <header className='NavBar'>
                <h3>Carômetro</h3>
                <a className='aNavBar' href="/Home">Home</a>
                <a className='aNavBar' href="/">Login</a>
                <a className='aNavBar' href="Cadastro">Cadastro</a>
                <a className='aNavBar' href="Alunos">Alunos</a>
                <a className='aNavBar' href="Turmas">Turmas</a>
                <a className='aNavBar' href="Perfil">Perfil</a>
            </header>

            <div className="TextoPerfil">
                <div className="AreaImagens2">
                    <img src="../../../components/img/gambiarra.png" width={"75vw"} className='gambiarra' />
                    <img src="../../../components/img/senai.png" width={"570vw"} className='senai' />
                    <img src="../../../components/img/perfil.png" className='perfil' />
                </div>

                <div className='nomeEscolaHome'>
                    <h3>SENAI Shunji Nishimura</h3>
                </div>

                <div className="nomePerfil">
                    <h1>PERFIL</h1>
                </div>
            </div>

            <div className='SeletorPerfil'>
                <select name="perfil" id="perfil">
                    <option value="">Selecione um Perfil...</option>
                    <option value="ADM">ADMINISTRAÇÃO</option>
                    <option value="COO">COORDENAÇÃO</option>
                    <option value="DIR">DIREÇÃO</option>
                    <option value="SEC">SECRETARIA</option>
                </select>
            </div>

        </div>
    );
}

export default Perfil;
