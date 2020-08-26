import React, { useState } from "react";

import {
  Container,
  ImageCropped,
  Form,
  Titulo,
  Subtitulo,
  InputGroup,
  Button,
} from "./styles";

import foto from "../../Assets/foto.jpg";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { signIn } from "../../Services/security";

// *********************************************************

const FormLogin = (props) => {
  const history = useHistory();

  // JSON com os campos do formulário
  const [alunoLogin, setAlunoLogin] = useState({
    email: "",
    senha: "",
  });

  // *****************************************************************************

  const entrar = async (e) => {
    // Faz com que a página não tenha o comportamento padrão, ou seja, não temos mais o refresh da página
    e.preventDefault();

    try {
      const retorno = await api.post("/sessao", alunoLogin);

      if (retorno.status === 201) {
        // Vai logar na aplicação
        signIn(retorno.data);

        // Redirecionar na tela home
        return history.push("/home");
      }
    } catch (error) {
      if (error.response) {
        return window.alert(error.response.data.erro);
      }

      window.alert("Ops, algo deu errado, tente novamente");
    }
  };

  // *****************************************************************************

  const handlerInput = (e) => {
    // Os 3 pontos significa o que ele ja tinha
    // O colchete diz que o que esta dentro é uma variavel
    // Vai alterar apenas o campo selecionado

    setAlunoLogin({ ...alunoLogin, [e.target.id]: e.target.value });
  };

  return (
    <Form onSubmit={entrar}>
      <Titulo>SENAI OVERFLOW</Titulo>
      <Subtitulo>Compartilhe suas dúvidas</Subtitulo>
      <InputGroup>
        <label> Email </label>
        <input
          type="email"
          value={alunoLogin.email}
          id="email"
          onChange={handlerInput}
          placeholder="Insira seu e-mail"
          required
        />
      </InputGroup>
      <InputGroup>
        <label> Senha </label>
        <input
          type="password"
          value={alunoLogin.senha}
          id="senha"
          onChange={handlerInput}
          placeholder="Insira sua senha"
          required
        />
      </InputGroup>
      <Button type="submit">Entrar</Button>
      <Button
        type="button"
        onClick={() => {
          props.mostrarForm("registrar");
        }}
      >
        Registrar-se
      </Button>
    </Form>
  );
};

// *********************************************************

const FormRegistrar = (props) => {
  const [alunoRegistrar, setAlunoRegistrar] = useState({
    ra: "",
    nome: "",
    email: "",
    senha: "",
  });

  const registrar = async (e) => {
    // Faz com que a página não faça o comportamento padrão
    e.preventDefault();

    try {
      const retorno = await api.post("/alunos", alunoRegistrar);

      if (retorno.status === 201) {
        // Vai logar na aplicação

        // Redirecionar na tela home

        window.alert("Registrado com sucesso");
      }
    } catch (error) {
      if (error.response) {
        return window.alert(error.response.data.erro);
      }

      window.alert("Ops, algo deu errado, tente novamente");
    }
  };

  const handlerInput = (e) => {
    // Os 3 pontos significa o que ele ja tinha
    // O colchete diz que o que esta dentro é uma variavel
    setAlunoRegistrar({ ...alunoRegistrar, [e.target.id]: e.target.value });
  };

  return (
    <Form onSubmit={registrar}>
      <Titulo>SENAI OVERFLOW</Titulo>
      <Subtitulo>Compartilhe suas dúvidas</Subtitulo>
      <InputGroup>
        <label> RA </label>
        <input
          type="number"
          value={alunoRegistrar.ra}
          id="ra"
          onChange={handlerInput}
          placeholder="Insira seu RA"
          required
        />
      </InputGroup>
      <InputGroup>
        <label> Nome </label>
        <input
          type="text"
          value={alunoRegistrar.nome}
          id="nome"
          onChange={handlerInput}
          placeholder="Insira seu nome"
          required
        />
      </InputGroup>
      <InputGroup>
        <label> Email </label>
        <input
          type="email"
          value={alunoRegistrar.email}
          id="email"
          onChange={handlerInput}
          placeholder="Insira seu e-mail"
          required
        />
      </InputGroup>
      <InputGroup>
        <label> Senha </label>
        <input
          type="password"
          value={alunoRegistrar.senha}
          id="senha"
          onChange={handlerInput}
          placeholder="Insira sua senha"
          required
        />
      </InputGroup>
      <Button type="submit">Enviar</Button>
      <Button
        type="button"
        onClick={() => {
          props.mostrarForm("login");
        }}
      >
        Já tenho cadastro
      </Button>
    </Form>
  );
};

// *********************************************************

const Login = () => {
  const [mostrarForm, setMostrarForm] = useState("login");

  return (
    <Container>
      <ImageCropped>
        <img src={foto} alt="Imagem de capa" />
      </ImageCropped>
      {mostrarForm === "login" ? (
        <FormLogin mostrarForm={setMostrarForm} />
      ) : (
        <FormRegistrar mostrarForm={setMostrarForm} />
      )}
    </Container>
  );
};

export default Login;
