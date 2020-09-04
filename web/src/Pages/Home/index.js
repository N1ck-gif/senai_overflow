import React, { useEffect, useState } from "react";

import { FiGithub, FiLogOut } from "react-icons/fi";
import "./styles.css";

import fotoPerfil from "../../Assets/foto_perfil.png";
import imgPost from "../../Assets/post-exemplo.jpg";
import { useHistory } from "react-router-dom";
import { signOut, getAluno } from "../../Services/security";
import { api } from "../../Services/api";
import Popup from "../../Components/Popup";

const CardPost = ({ post }) => {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");

  const carregarComentarios = async () => {
    try {
      if (!mostrarComentarios) {
        const retorno = await api.get(`postagens/${post.id}/comentarios`);

        setComentarios(retorno.data);
      }

      setMostrarComentarios(!mostrarComentarios);
    } catch (error) {
      console.log(error);
    }
  };

  const criarComentario = async (e) => {
    e.preventDefault();

    try {
      // Chamada para a API criando um novo comentário
      const retorno = await api.post(`/postagens/${post.id}/comentarios`, {
        descricao: novoComentario,
      });

      // Recebe o retorno da API como o comentário criado
      let comentario = retorno.data;

      // Colocamos os dados do aluno logado no comentário criado
      comentario.Aluno = getAluno();

      // Atualiza a lista inserindo o novo comentário
      // Seta a losta com o que ela já tinha, e como o novo comentário
      setComentarios([...comentarios, comentario]);

      // Limpa o campo novo comentário
      setNovoComentario("");
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
      <section>
        <strong>{post.titulo}</strong>
        <p>{post.descricao}</p>
        <img src={imgPost} alt="Imagem Post" />
      </section>
      <footer>
        <h1 onClick={carregarComentarios}> Comentários </h1>
        {mostrarComentarios && (
          <>
            {comentarios.length === 0 && (
              <p> Não tem comentários nesta postagem </p>
            )}
            {comentarios.map((c) => (
              <section key={c.id} className="containerComentario">
                <header>
                  <img src={fotoPerfil} alt="Foto Perfil" />
                  <strong> {c.Aluno.nome} </strong>
                  <p> {c.createdAt} </p>
                </header>
                <p> {c.descricao} </p>
              </section>
            ))}
            <form className="novo-comentario" onSubmit={criarComentario}>
              <textarea
                placeholder="Digite seu comentário"
                required
                value={novoComentario}
                onChange={(e) => {
                  setNovoComentario(e.target.value);
                }}
              ></textarea>
              <button> Enviar </button>
            </form>
          </>
        )}
      </footer>
    </div>
  );
};

const NovaPostagem = ({setMostrarNovaPostagem}) => {
  const [novaPostagem, setNovaPostagem] = useState({
    titulo: "",
    descricao: "",
    gists: "",
  });

  const fechar = () => {
    const { titulo, descricao, gists } = novaPostagem;

    if ((titulo || descricao || gists) && !window.confirm("Tem certeza que quer abandonar a dúvida")) {
      return;
    }

    setMostrarNovaPostagem(false)
        
      
  };

  const handlerInput = (e) => {
    setNovaPostagem({ ...novaPostagem, [e.target.id]: e.target.value });
  };

  return (
    <Popup>
      <form className="novaPostagem">
        <span onClick={fechar}> &times; </span>
        <h1> Publique sua dúvida </h1>
        <label> Titulo </label>
        <input
          type="text"
          id="titulo"
          placeholder="Sobre o que é a sua dúvida?"
          onChange={handlerInput}
        />
        <label> Descrição </label>
        <textarea
          placeholder="Descreva em detalhes o que te afringe"
          id="descricao"
          onChange={handlerInput}
        ></textarea>
        <label>
          {" "}
          Gists <em>Opcional</em>{" "}
        </label>
        <input
          type="text"
          id="gists"
          placeholder="###########"
          onChange={handlerInput}
        />
        <label>
          {" "}
          Imagem <em>Opcional</em>{" "}
        </label>
        <input type="file" />
        <img alt="preview" />
        <button> Enviar </button>
      </form>
    </Popup>
  );
};

function Home() {
  const history = useHistory();
  const [postagens, setPostagens] = useState([]);
  const [mostrarNovaPostagem, setMostrarNovaPostagem] = useState(false);

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
      {mostrarNovaPostagem && (
        <NovaPostagem setMostrarNovaPostagem={setMostrarNovaPostagem} />
      )}
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
          <label> Editar Foto </label>
          <strong>Nome:</strong>
          <p>{alunoSessao.nome}</p>

          <strong>RA:</strong>
          <p>{alunoSessao.ra}</p>
        </section>
        <section className="feed">
          {postagens.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </section>
        <section className="actions">
          <button
            onClick={() => {
              setMostrarNovaPostagem(true);
            }}
          >
            {" "}
            Nova Postagem{" "}
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
