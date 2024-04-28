import React from 'react';
import dataNoticias from '../../dados/dataNoticias';
import "./detalhesNoticia.css"
import { useParams } from 'react-router-dom';

const DetalhesNoticia = () => {
  const { id } = useParams();
  const noticia = dataNoticias.find((item) => item.id === id);

  if (!noticia) {
    return <div>Notícia não encontrada.</div>;
  }

  const { titulo, conteudo, imagens, categorias } = noticia;
  const { principal, extras } = imagens;

  return (
    <>
      <h1>{titulo}</h1>
      <h3>{categorias}</h3>
      <p>{conteudo}</p>
      <img src={principal} alt={titulo} />
        <img src={extras[0]} alt={titulo} />
        <img src={extras[1]} alt={titulo} />
        <img src={extras[2]} alt={titulo} />
    </>
  );
};

export default DetalhesNoticia;
