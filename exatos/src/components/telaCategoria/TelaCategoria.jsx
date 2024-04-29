import React from 'react';
import './telaCategoria.css'
import CardSimples from '../cards/simples/CardSimples';
import dataNoticias from '../../dados/dataNoticias';

const TelaCategoria = () => {
    const url = window.location.href;
    const partesDaUrl = url.split('/');
    const categoria = partesDaUrl[partesDaUrl.length - 1];

    const idsMaterias = [];
    dataNoticias.forEach( noticia => {
        if (noticia.categorias.includes(categoria)){
            idsMaterias.push(noticia.id)
        }
    });

  return (
    <div>
        <div className="container_categoria">
            <h1>Conteúdo sobre: {categoria}</h1>
            
            <div className='cards_materias'>
                {idsMaterias.map( (value, index) => (
                    <CardSimples materiaId={value}></CardSimples>
                ))}
            </div>
        </div>
  </div>
  );
};

export default TelaCategoria;
