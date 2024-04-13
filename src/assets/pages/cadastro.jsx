import React from "react";
import "../../App.jsx";
import "../../App.css";

function Cadastro() {
  return (
    <div className="corpo2">
      <div className="AreaDeCadastro">
        <div className="TituloCadastro">
          <h1>CADASTRO</h1>
        </div>

        <div className="doisTextos">
          
          <div className="AreaDeTexto">
            <label htmlFor="">Turma:</label>
            <input type="text" name="turma" id="turma" />

            <label htmlFor="">Nome Completo:</label>
            <input type="text" name="nomeC" id="nomeC" />

            <label htmlFor="">Data de Nascimento:</label>
            <input type="text" name="data" id="data" />

            <label htmlFor="">Usuário:</label>
            <input type="text" name="usuario" id="usuario" />
          </div>
          <div className="divisoria">
            <div id="linha" />
          </div>

          <div className="AreaTexto2">
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="">Senha:</label>
            <input type="password" name="senha" id="senha" />

            <label htmlFor="">Confirmar Senha:</label>
            <input type="password" name="cSenha" id="cSenha" />
          </div>
        </div>

        <button id="botaoCadastro" className="botao">Cadastrar</button>

      </div>
    </div>
  );
}

export default Cadastro;
