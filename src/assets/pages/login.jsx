import React from "react";
import "../../App.jsx";
import "../../App.css";
import Cadastro  from "./Cadastro.jsx";


function Login() {
  return (
    <div className="corpo">
      <div className="areaImagens">
        <img
          src="../../../components/img/senai.png"
          width={"570vw"}
          className="senai"
        />
        <h3 id="nomeEscolaCadastro">SENAI Shunji Nishimura</h3>
        <img src="../../../components/img/chave.png" width={"450vw"} />
      </div>

      <div className="areaTexto">
        <div className="areaDeLogin">
          <h1>LOGIN</h1>

          <label htmlFor="" className="titulosInput" id="usuario">
            Usuário:
          </label>
          <input type="text" name="usuario" id="usuario" />

          <label htmlFor="" className="titulosInput" id="senha">
            Senha:
          </label>
          <input type="password" name="senha" id="senha" />

          <div className="checkSenha">
            <div className="checkbox">
              <input type='checkbox' id="lembraCaixa"/> 
              <label htmlFor="checkbox" id='lembreSe'>Lembre-se de mim</label>
            </div>

            <a href="">Esqueceu a senha ?</a>
          </div>
          
          <button id="botaoLogin" className="botao">Entrar</button>

          <div className="criadorDeConta">
              <p>Quer cadastrar um Aluno?</p>
              <a href="Cadastro">Cadastre Aqui!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
