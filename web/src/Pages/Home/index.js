import React, { useEffect, useState } from "react";

import { FiGithub, FiLogOut } from "react-icons/fi";
import "./styles.css";

import fotoPerfil from "../../Assets/foto_perfil.png";
import imgPost from "../../Assets/post-exemplo.jpg";
import { useHistory } from "react-router-dom";
import { signOut, getAluno } from "../../Services/security";
import { api } from "../../Services/api";

const CardPost = ({ post }) => {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  const carregarComentarios = async () => {

    try {
      if(!mostrarComentarios){
        const retorno = await api.get(`postagens/${post.id}/comentarios`);

        setComentarios(retorno.data);
      }
      
      setMostrarComentarios(!mostrarComentarios);

    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="card-post">
      <header>
        <img src={fotoPerfil} alt="Foto de Perfil" />
        <strong> {post.Aluno.nome} </strong>
        <p> {post.createdAt} </p>
        {/* Renderização Condicional, só mostra o icone se gists for true */}
        {post.gists && <FiGithub className="icon" size="25" />}
      </header>
      <body>
        <strong>{post.titulo}</strong>
        <p>{post.descricao}</p>
        <img src={imgPost} alt="Imagem Post" />
      </body>
      <footer>
        <h1 onClick={carregarComentarios}> Comentários </h1>
        {mostrarComentarios && (
          <>
            {comentarios.length === 0 && (<p> Não tem comentários nesta postagem </p>)}
            {comentarios.map((c) => (
              <section className="containerComentario">
                <header>
                  <img src={fotoPerfil} alt="Foto Perfil" />
                  <strong> {c.Aluno.nome} </strong>
                  <p> {c.createdAt} </p>
                </header>
                <p> {c.descricao} </p>
              </section>
            ))}
          </>
        )}
      </footer>
    </div>
  );
};

function Home() {
  const history = useHistory();
  const [postagens, setPostagens] = useState([]);

  // O use effect sempre vai ser chamado depois da renderização do componente
  // [] - simboliza a lista vazia, isso faz com que esse efeito vai ser chamado uma vez só, quando o componente for montado
  useEffect(() => {
    const carregarPostagens = async () => {
      try {
        const retorno = await api.get("/postagens");

        setPostagens(retorno.data);
      } catch (error) {
        console.log(error);
      }
    };

    carregarPostagens();
  }, []);

  // Pegando o Aluno Logado
  const alunoSessao = getAluno();

  return (
    <div className="container">
      <header className="header">
        <div>
          <p> SENAI OVERFLOW </p>
        </div>
        <div>
          <input
            type="search"
            name=""
            id=""
            placeholder="Pesquisar um dúvida"
          />
        </div>
        <div>
          <button
            className="btnSair"
            onClick={() => {
              signOut();
              history.replace("/");
            }}
          >
            Sair <FiLogOut size="20" />
          </button>
        </div>
      </header>
      <div className="content">
        <section className="profile">
          <img src={fotoPerfil} alt="Foto de Perfil" />
          <a href="#"> Editar Foto </a>
          <strong>Nome:</strong>
          <p>{alunoSessao.nome}</p>

          <strong>RA:</strong>
          <p>{alunoSessao.ra}</p>
        </section>
        <section className="feed">
          {postagens.map((post) => (
            <CardPost post={post} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
