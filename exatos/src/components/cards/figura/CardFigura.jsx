import './cardFigura.css'
import dataNoticias from '../../../dados/dataNoticias';

export const CardFigura = ({ materiaId }) => {

    const dados = dataNoticias[materiaId];
    const titulo = dados.titulo
    const resumo = dados.resumo
    const imagemPrincipal = dados.imagens.principal
    
    return (
        <>
        <div className='container_geralCardFigura'>
            <a href={materiaId}>
                <div className="container_cardFigura" style={{backgroundImage: `url(${imagemPrincipal })`}}>
                    <h2>{titulo}</h2>
                    <p>{resumo}</p>
                </div>
            </a>
        </div>
        </>
    )
}
  
export default CardFigura