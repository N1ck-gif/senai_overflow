// Tudo vai ficar dentro deste componente App

import React, { useState } from 'react';

import Login from "./Pages/Login"
import { GlobalStyle } from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
