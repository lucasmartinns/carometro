import React from "react";
import "../../App.jsx";
import "../../App.css";
import Cards from '../../../components/cards/cards.jsx';


function Turmas() {
    return (

        <div className="corpo4">

            <header className='NavBar'>
                <h3>Carômetro</h3>
                <a className='aNavBar' href="Home">Home</a>
                <a className='aNavBar' href="/">Login</a>
                <a className='aNavBar' href="Cadastro">Cadastro</a>
                <a className='aNavBar' href="Alunos">Alunos</a>
                <a className='aNavBar' href="Turmas">Turmas</a>
            </header>

            <div className='TextoTurmas'>
                <div className="AreaImagens2">
                    <img src="../../../components/img/gambiarra.png" width={"75vw"} className='gambiarra' />
                    <img src="../../../components/img/senai.png" width={"570vw"} className='senai' />
                    <img src="../../../components/img/perfil.png" className='perfil' />
                </div>

                <div className='nomeEscolaHome'>
                    <h3>SENAI Shunji Nishimura</h3>
                </div>

                <div className="nomeTurmas">
                    <h1>TURMAS</h1>
                </div>

            </div>

            <div className='CardAreaBusca'>


            <Cards 
              icone={"../../components/img/IDEV.png"}
              titulo1={"Desenvolvimento de"}
              sistemas={"Sistemas"}
              informacao1={"IDEV1"}
              informacao2={"IDEV2"}
              link2={"/IDEV2"}  
              informacao3={"IDEV3"}
              />

            <Cards 

              icone={"../../components/img/IMEC.png"}
              titulo1={"Mecânica"}
              informacao1={"IMEC1"}
              informacao2={"IMEC2"}
              informacao3={"IMEC3"}
              cor= '#781B1B' />


            <Cards

              icone={"../../components/img/IELEC.png"}
              titulo1={"Eletroeletrônica"}
              informacao1={"IELE1"}
              informacao2={"IELE2"}
              informacao3={"IELE3"}
              />
            
          </div>
        </div>
    );
}

export default Turmas;
