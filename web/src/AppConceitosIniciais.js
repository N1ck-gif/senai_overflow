// Tudo vai ficar dentro deste componente App

import React, { useState } from 'react';

const HelloWorld = () => {
  return(
    <div> Helo World, React JS </div>
  );
}

const BemVindo = (propriedades) => {
  return(
    <div> 
      {propriedades.usuario} 
    </div>
  );
}

const Login = () => {

  // Criando variaveis de estado
  // Esta dizendo que a variavel email é uma String
  // Para  se fazer uma atribuição em alguma delas, tem que usar o setEmail ou o setSenha  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 
  const handlerEmail = (evento) => {
    // Coloca o que o usuário digitou na variavel email
    setEmail(evento.target.value);
  }

  const handlerSenha = (evento) => {
    // Coloca o que o usuário digitou na variavel senha
    setSenha(evento.target.value);
  }
  
  const entrar = async () => {

    // JSON.stringify - esta transformando o objeto em uma string
    const retorno = await fetch("http://localhost:3333/sessao", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    });

    console.log(await retorno.json());
  }

  return(
    <div>
      <input type="text" value={email} onChange={handlerEmail} placeholder="Insira seu e-mail" />

      <input type="password" value={senha} onChange={handlerSenha} placeholder="Insira sua senha" />

      <button onClick={entrar}>Teste</button>
    </div>
    
  );
}

function App() {
  return (
    <div>
      <HelloWorld />
      <BemVindo usuario="Ciclano"/>

      <Login />
    </div>
    
  );
}

export default App;
