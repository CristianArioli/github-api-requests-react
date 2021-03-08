import React, { useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Routes from './Routes';
import { GlobalStyle } from './components/styles';

function App() {
  const history = useHistory();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>

  );
}

export default App;
