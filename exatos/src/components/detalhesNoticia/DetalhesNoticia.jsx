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
    <div className="container">
        <div className='container_section'>
          <h1>{titulo}</h1>
          <h3 className='btn_categoria'>{categorias[0]} e {categorias[1]}</h3>
            <div className="imagem-principal">
              <img src={principal} alt={titulo} />
                <div className='container_bottom'>
                  <div className="conteudo">
                    <p>{conteudo}</p>
                  </div>
                </div>
            </div>
        </div>

        <div className="outras-imagens">
           {extras.map((imagem, index) => (
              <img key={index} src={imagem} alt={titulo} />
           ))}
        </div>
        
    </div>
  );
};

export default DetalhesNoticia;
