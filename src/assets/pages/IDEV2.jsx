import React from "react";
import "../../App.jsx";
import "../../App.css";


function IDEV2() {
    return (

        <div className="corpo8">
            
            <header className='NavBar'>
                <h3>Carômetro</h3>
                <a className='aNavBar' href="/">Home</a>
                <a className='aNavBar' href="Login">Login</a>
                <a className='aNavBar' href="Cadastro">Cadastro</a>
                <a className='aNavBar' href="Alunos">Alunos</a>
                <a className='aNavBar' href="Turmas">Turmas</a>
                <a className='aNavBar' href="Perfil">Perfil</a>
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



        </div>
    );
}

export default IDEV2;
