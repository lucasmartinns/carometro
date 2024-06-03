import React from "react";
import "../../App.jsx";
import "../../App.css";

function Aluno() {
  return (
    <div className="corpo9">
      <header className="NavBar">
        <h3>Carômetro</h3>
        <a className="aNavBar" href="Home">
          Home
        </a>
        <a className="aNavBar" href="/">
          Login
        </a>
        <a className="aNavBar" href="Cadastro">
          Cadastro
        </a>
        <a className="aNavBar" href="Alunos">
          Alunos
        </a>
        <a className="aNavBar" href="Turmas">
          Turmas
        </a>
      </header>

      <div className="TextoAluno">
        <div className="AreaImagens2">
          <img
            src="../../../components/img/ALUNO.png"
            width={"75vw"}
            className="IDEVB"
          />
          <div className="nomeIDEV2">
            <h1>Aluno - Giovani Canella de Souza - IDEV2</h1>
          </div>
          <img src="../../../components/img/perfil.png" className="perfil" />
        </div>
      </div>

      <div className="AreaAluno">

        <div className="AreaCimaAluno">

            <div className="AreaImagemAluno">
                <img src="../../../components/img/GIOVANI.png" width={"350vw"} height={"350vh"} className="GIOVANI" />
            </div>

            <div className="InformacoesAluno">

              <div className="LadoDireito">

                <div className="InfoTitle">
                  <h1>INFORMAÇÕES</h1>
                </div>

                <div className="maisInfos">
                  <li>Cel: (12)3456-7890</li>
                  <li>Idade Atual: 12 Anos</li>
                  <li>Nascimento: 12/34/5678</li>
                  <li>Email: giovani2000@senai.com</li>
                </div>

              </div>

              <div className="botoesInfos">
                <button id="botaoVoltar" className="botao" onClick={()=>window.location.href ='/IDEV2'}>Voltar</button>
                <button id="botaoEnviar" className="botao">Enviar</button>
              </div>

            </div>

              

        </div>

        <div className="AreaOcorrenciasAluno">

            <div className="OcorrenciasAluno">
                <h2>OCORRÊNCIAS:</h2>
                <button id="botaoOcorrencia" className="botao">Criar Ocorrência</button>
            </div>

        </div>

      </div>

        
    </div>
  );
}

export default Aluno;
