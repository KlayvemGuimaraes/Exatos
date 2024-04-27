import React from 'react';
import { useParams } from 'react-router-dom';

const DetalhesMateria = () => {
    const { id } = useParams();

    // Lógica para buscar e exibir os detalhes da matéria com o ID recebido

    return (
        <div>
            <h2>Detalhes da Matéria {id}</h2>
            {/* Conteúdo dos detalhes da matéria */}
        </div>
    );
}

export default DetalhesMateria;
