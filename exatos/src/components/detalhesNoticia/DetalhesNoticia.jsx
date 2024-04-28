import React from 'react';
import dataNoticias from '../../dados/dataNoticias';
import "./detalhesNoticia.css"

export const DetalhesNoticia = ({ materiaId }) => {

  const dados = dataNoticias[materiaId]
  const titulo = dados.titulo
  const resumo = dados.resumo
  const imagemPrincipal = dados.imagens.principal
  const imagensExtras = dados.imagens.extras
  
  return (
      <>
        <h1>funcionou</h1>
            <h1>{titulo}</h1>
            <p>{resumo}</p>
            <img src={imagemPrincipal} alt={titulo} />
            <img src={imagensExtras} alt={titulo} />
      </>
  )
}

export default DetalhesNoticia