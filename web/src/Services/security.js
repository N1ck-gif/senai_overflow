import { api } from "./api";

// Chave que irá no localStorage
const CHAVE_ALUNO = "@aluno";

// Está função vai ter o papel de fazer o Login do usuário
export const signIn = (aluno) => {
  localStorage.setItem(CHAVE_ALUNO, JSON.stringify(aluno));

  api.defaults.headers.common['Authorization'] = `Bearer ${aluno.token}`;
};

export const signOut = () => {
  localStorage.clear();

  api.defaults.headers.common['Authorization'] = undefined;
};

export const getAluno = () => {
    const { aluno } = JSON.parse(localStorage.getItem(CHAVE_ALUNO));

    return aluno;
};

export const isSignedIn = () => {
  const aluno = JSON.parse(localStorage.getItem(CHAVE_ALUNO));

  // Se usuári estiver logado, nós pegamos o token dele e colocamos nas configurações padrão da API
  if( aluno ){
    api.defaults.headers.common['Authorization'] = `Bearer ${aluno.token}`;
  }

  // Aqui futuramente vamos implementar a verificação do Token

  // Se houver aluno no localStorage, ele está logado, se não, ele não está logado
  return aluno ? true : false;
};
