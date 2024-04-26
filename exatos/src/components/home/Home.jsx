import React from 'react';
import logo from '../../imgs/image.png'
import './home.css'

const Home = () => {
  return (
    <div>
      <div className="content">
        <div className="text">
          <h1>Bem-vindo à minha página inicial</h1>
          <p>Esta é uma página inicial avançada em React com uma barra de navegação, texto à esquerda e imagem à direita.</p>
        </div>
        <div className="image">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
