import React from 'react';
import imageExatos from '../../imgs/ExatosImage.png'
import './home.css'
import GradeFigura from '../cards/grade/GradeSimples';
import CardSimples from '../cards/simples/CardSimples';
import CardFigura from '../cards/figura/CardFigura';

const Home = () => {
  return (
    <div>
        <div className="content">
            <div className="text">
              <button className='btn'>SEJA BEM-VINDO</button>
                <h1>A COMUNIDADE NERD ESTÀ AQUI :)</h1>
                <p>Assine nossa newsletter para receber as melhores oportunidades da comunidade geek.</p>
                  <button className='btn_comunidade'>Faça parte dessa comunidade!</button>
            </div>    
                <div className="image">
                  <img src={imageExatos} alt="Logo" className="logo" />
                </div>
        </div>
          <div className="App-header">
              <CardSimples materiaId="1"></CardSimples>
              <CardFigura materiaId="3"></CardFigura>
              <GradeFigura materiaId="2"></GradeFigura>
          </div>
  </div>
  );
};

export default Home;
