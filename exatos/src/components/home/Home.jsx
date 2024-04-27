import React from 'react';
import imageExatos from '../../imgs/ExatosImage.png'
import './home.css'

const Home = () => {
  return (
    <div>
      <div className="content">
        <div className="text">
          <button className='btn'>SEJA BEM-VINDO</button>
            <h1>A comunidade nerd está aqui :)</h1>
            <p>Assine nossa newsletter para receber as melhores oportunidades da comunidade geek.</p>
          <button className='btn_comunidade'>Faça parte dessa comunidade!</button>
        </div>
        <div className="image">
          <img src={imageExatos} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
