import './dinamico.css'
import dataNoticias from '../../../dados/dataNoticias';

export const Dinamico = ({ materiaId }) => {

    const dados = dataNoticias[materiaId - 1];
    const titulo = dados.titulo
    const resumo = dados.resumo
    const imagemPrincipal = dados.imagens.principal
    const imagens = dados.imagens.extras
    const categorias = dados.categorias
    
    return (
        <>
        <div className='container_geralDinamico'>
            <a href={materiaId}>
                <div className="cotainer_dinamicoConteudo">
                    <h2>{titulo}</h2>
                    <p>{resumo}</p>
                    <div className='categorias'>
                        {categorias.map( (value, index) => (
                            <label className={value}>{value}</label>
                        ))}
                    </div>
                </div>

                <div className="container_dinamicoFotos" >
                    <img src={imagemPrincipal} alt="imagem" />
                    <img src={imagens[0]} alt="imagem" />
                    <img src={imagens[1]} alt="imagem" />
                    <img src={imagens[2]} alt="imagem" />
                </div>
            </a>
        </div>
        </>
    )
}
  
export default Dinamico