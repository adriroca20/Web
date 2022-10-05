import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './components/Posts';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter></Counter>
  </React.StrictMode>
);

