import React from "react";
import "../../App.jsx";
import "../../App.css";


function Alunos() {
    return (

        <div className="corpo6">
            
            <header className='NavBar'>
                <h3>Carômetro</h3>
                <a className='aNavBar' href="/">Home</a>
                <a className='aNavBar' href="Login">Login</a>
                <a className='aNavBar' href="Cadastro">Cadastro</a>
                <a className='aNavBar' href="Alunos">Alunos</a>
                <a className='aNavBar' href="Turmas">Turmas</a>
                <a className='aNavBar' href="Perfil">Perfil</a>
            </header>

            <div className="TextoAlunos">
                <div className="AreaImagens2">
                    <img src="../../../components/img/gambiarra.png" width={"75vw"} className='gambiarra' />
                    <img src="../../../components/img/senai.png" width={"570vw"} className='senai' />
                    <img src="../../../components/img/perfil.png" className='perfil' />
                </div>

                <div className='nomeEscolaHome'>
                    <h3>SENAI Shunji Nishimura</h3>
                </div>

                <div className="nomeAlunos">
                    <h1>ALUNOS</h1>
                </div>
            </div>

            <div className='SeletorAlunos'>
                    <select name="turmas" id="turmas">
                        <option value="">Selecione uma Turma...</option>
                        <option value="IDEV1">IDEV - 1</option>
                        <option value="IDEV2">IDEV - 2</option>
                        <option value="IDEV3">IDEV - 3</option>
                        <option value="IMEC1">IMEC - 1</option>
                        <option value="IMEC2">IMEC - 2</option>
                        <option value="IMEC3">IMEC - 3</option>
                        <option value="IELE">IELE - 1</option>
                        <option value="IELE">IELE - 2</option>
                        <option value="IELE">IELE - 3</option>
                    </select>
                </div>

        </div>
    );
}

export default Alunos;
