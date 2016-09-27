import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const pathToData = 'http://localhost:8090/data';

ReactDOM.render(
  <App pathToData={pathToData} />,
  document.getElementById('app')
);