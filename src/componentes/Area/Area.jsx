import './Area.css'
import Produto from '../Produto/Produto'

const Area = props => {
  const corDeFundo = { backgroundColor: props.corSecundaria }
  const corSublinhado = { borderColor: props.corPrimaria }

  return (
    props.produtos.length > 0 ?
      <section className="area" style={corDeFundo}>
        <h3 style={corSublinhado}>{props.nome}</h3>
        <div className="produtos">
          {props.produtos.map((produto, indice) => (
            <Produto
              key={`${produto.nome}-${indice}`}
              nome={produto.nome}
              preco={produto.preco}
              estado={produto.estado}
              marca={produto.marca}
              imagemMarca={produto.imagemMarca}
            />
          ))}
        </div>
      </section>
      : ''
  )
}

export default Area
