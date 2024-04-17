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
            <label htmlFor="">Nome Completo:</label>
            <input className="inputCadastro" type="text" name="turma" id="turma" />

            <label htmlFor="">Telefone:</label>
            <input className="inputCadastro" type="text" name="nomeC" id="nomeC" />

            <label htmlFor="">Data de Nascimento:</label>
            <input className="inputCadastro" type="text" name="data" id="data" />

            <label htmlFor="">Turma:</label>
            <input className="inputCadastro" type="text" name="data" id="data" />

          </div>
          <div className="divisoria">
            <div id="linha" />
          </div>

          <div className="AreaTexto2">
            <label htmlFor="">E-mail Institucional:</label>
            <input className="inputCadastro" type="email" name="email" id="email" />

            <label htmlFor="">Usuário:</label>
            <input className="inputCadastro" type="password" name="senha" id="senha" placeholder="Editado somente pelo Aluno." disabled/>

            <label htmlFor="">Senha:</label>
            <input className="inputCadastro" type="password" name="cSenha" id="cSenha" placeholder="Editado somente pelo Aluno." disabled/>
          </div>
        </div>

        <div className="botaoCadastro">
          <button id="botaoCadastro" className="botao">Cadastrar</button>
        </div>

      </div>
    </div>
  );
}

export default Cadastro;
