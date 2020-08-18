import React from "react";

import { 
    Container, 
    ImageCropped, 
    Form, 
    Titulo, 
    Subtitulo,
    InputGroup, 
    Button 
} from "./styles";

import foto from "../../Assets/foto.jpg";

const Login = () => {

    return (
        <Container>
            <ImageCropped> 
                <img src={foto} alt="Imagem de capa" />
            </ImageCropped>
            <Form>
                <Titulo>
                    SENAI OVERFLOW
                </Titulo>
                <Subtitulo>
                    Compartilhe suas dúvidas
                </Subtitulo>
                <InputGroup>
                    <label> Email </label>
                    <input type="email" placeholder="Insira seu e-mail" />
                </InputGroup>
                <InputGroup>
                    <label> Senha </label>
                    <input type="password" placeholder="Insira sua senha" />
                </InputGroup>
                <Button>
                    Entrar
                </Button>
                <Button>
                    Registrar-se
                </Button>
            </Form>
        </Container>
    )

}

export default Login;