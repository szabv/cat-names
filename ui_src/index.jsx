import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const dataUrl = 'http://localhost:8090/animal-data';

ReactDOM.render(
  <App dataUrl={dataUrl} />,
  document.getElementById('app')
);