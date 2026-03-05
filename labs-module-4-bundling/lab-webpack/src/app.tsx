import React from 'react';
import logoImg from './img/github.svg';

export const App = () => {
  return (
    <div className="container">
      <h1>Hello world with Sass, React and TypeScript</h1>
      <p>Mode: {process.env.ENVIRONMENT}</p>
      <img src={logoImg} alt="Logo" />
    </div>
  );
};
