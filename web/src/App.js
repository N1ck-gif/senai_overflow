// Tudo vai ficar dentro deste componente App

import React from 'react';

import Routes from "./routes";
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
