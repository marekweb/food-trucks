import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app';

axios.get('/data').then(response => {
  ReactDOM.render(
    <App events={response.data} />,
    document.getElementById('root')
  );
});
