import './cardSimple.css'
import dataNoticias from "../../dados/dataNoticias"

export const CardSimples = ({ materiaId }) => {

    const dados = dataNoticias[materiaId];
    const titulo = dados.titulo
    const resumo = dados.resumo
    const imagemPrincipal = dados.imagens.principal
    
    return (
        <>
        <div className="container_cardSimples">
            <div className="cardSimples_imagem">
                <img src={imagemPrincipal} />
            </div>

            <div className="cardSimples_informacoes">
                <h2>{titulo}</h2>
                <p>{resumo}</p>
            </div>
        </div>
        </>
    )
}
  
export default CardSimples