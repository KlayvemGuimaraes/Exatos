import React from 'react';
import imageExatos from '../../imgs/ExatosImage.png'
import './home.css'
import GradeFigura from '../cards/grade/GradeSimples';
import GrandeFigura from '../cards/grandeFigura/GrandeFigura';
import CardSimples from '../cards/simples/CardSimples';
import CardFigura from '../cards/figura/CardFigura';
import Dinamico from '../cards/dinamico/Dinamico';

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
              <CardFigura materiaId="3"></CardFigura>
              <GradeFigura materiaId="2"></GradeFigura>
              <Dinamico materiaId="7"></Dinamico>
              <CardFigura materiaId="8"></CardFigura>
              <GradeFigura materiaId="4"></GradeFigura>
              <CardSimples materiaId="1"></CardSimples>
              <GrandeFigura materiaId = "10"></GrandeFigura>
              <GrandeFigura materiaId = "9"></GrandeFigura>
              <CardSimples materiaId="5"></CardSimples>
              <Dinamico materiaId="6"></Dinamico>
          </div>
  </div>
  );
};

export default Home;
