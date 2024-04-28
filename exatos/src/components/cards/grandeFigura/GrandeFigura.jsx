import './grandeFigura.css'
import dataNoticias from '../../../dados/dataNoticias';

export const GrandeFigura = ({ materiaId }) => {

    const dados = dataNoticias[materiaId - 1];
    const titulo = dados.titulo
    const resumo = dados.resumo
    const imagemPrincipal = dados.imagens.principal
    const categorias = dados.categorias
    
    return (
        <>
        <div className='container_geralGrandeFigura'>
            <a href={materiaId}>
                <div className="container_grandeFigura" style={{backgroundImage: `url(${imagemPrincipal }) `, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                
                </div>
                <div className='grandeFigura_conteudo'>
                    <h2>{titulo}</h2>
                    <p>{resumo}</p>
                    <div className='categorias'>
                        {categorias.map( (value, index) => (
                            <label className={value}>{value}</label>
                        ))}
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}
  
export default GrandeFigura