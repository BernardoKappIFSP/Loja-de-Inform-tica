import './Produto.css'

const Produto = props => {
  const precoFormatado = Number(props.preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <article className="produto">
      <div className="produto-cabecalho">
        <img src={props.imagemMarca} alt={`Marca ${props.marca}`} />
      </div>
      <div className="produto-rodape">
        <h4>{props.nome}</h4>
        <h5>{precoFormatado}</h5>
        <span>{props.estado}</span>
      </div>
    </article>
  )
}

export default Produto
