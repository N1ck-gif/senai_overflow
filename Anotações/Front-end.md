# React

**React** - é uma biblioteca JavaScript para construção de interfaces de usuário.

Tudo no React é baseado em componentes.

**npx create-react-app nomeProjeto** - cria um projeto React

**Componente** - é uma função JavaScript que retorna um código HTML, o retorno da função é XML

Por trás, o React executa JavaScript puro

**JSX** - criação de código HTML dentro do JavaScript

O retorno do JSX sempre tem que ter uma tag principal

A página que abre na página é a public/index.html. É esta página que o React disponibiliza para o navegador

Os componentes podem receber propriedades

Exemplo de componente com propriedades:
```javascript {.line-numbers}
    const BemVindo = (props) => {
        return(
            <div> 
                {props.texto}
                {props.teste}
            </div>
        ); 
    }

    function App() {
        return(
            <div>
                <BemVindo texto="Bem-vindo ao ReactJS" teste="Olá pessoal">
            </div>
        );
    }
```

O retorno do JSX sempre tem que ter uma Tag principal
_Caso não queira criar uma div principal podemos usar <> </>, que são conhecidos como Fragment. Com o frogment, ele não reenderiza nada em volta delas._

**useState()** - usado na criação de uma variavel de estado, retorna um vetor.

**npm start** - inicia o servidor React.

**npm install cors**

**npm install styled-components** - instala uma biblioteca de estilização.

Todos os componentes das páginas ficaram dentro da pasta Page