import './gradeSimples.css'
import dataNoticias from '../../../dados/dataNoticias'

export const GradeFigura = ({ materiaId }) => {

    const dados = dataNoticias[materiaId]
    const titulo = dados.titulo
    const resumo = dados.resumo
    const imagemPrincipal = dados.imagens.principal
    const imagensExtras = dados.imagens.extras
    
    return (
        <>
        <div className="container_gradeFigura">
            
            <a href={materiaId}>
                <div className='gradeFigura_topo'>
                    <div className='gradeFigura_imgLateral'>
                        <img src={imagemPrincipal}/>
                    </div>

                    <div className='gradeFigura_textoLateral'>
                        <h2>{titulo}</h2>
                        <p>{resumo}</p>
                    </div>
                </div>

                <div className='gradeFigura_baixo'>
                    <img src={imagensExtras[0]}/>
                    <img src={imagensExtras[1]}/>
                    <img src={imagensExtras[2]}/>
                </div>
            </a>
        </div>
        </>
    )
}
  
export default GradeFigura