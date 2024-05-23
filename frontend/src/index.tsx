import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Soma from './Soma';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Soma />
  </React.StrictMode>
);

