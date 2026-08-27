import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'

const Formulario = props => {
  const [secao, setSecao] = useState(props.secoes[0])
  const [marca, setMarca] = useState('Asus')
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [estado, setEstado] = useState('Novo')

  const aoSalvar = evento => {
    evento.preventDefault()

    props.aoProdutoCadastrado({
      secao: secao,
      marca: marca,
      nome: nome,
      preco: preco,
      estado: estado
    })

    setSecao(props.secoes[0])
    setMarca('Asus')
    setNome('')
    setPreco('')
    setEstado('Novo')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto</h2>
        <ListaSuspensa
          label="Seção"
          itens={props.secoes}
          valor={secao}
          aoAlterado={valor => setSecao(valor)}
        />
        <ListaSuspensa
          label="Marca"
          itens={props.marcas}
          valor={marca}
          aoAlterado={valor => setMarca(valor)}
        />
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome do produto"
          type="text"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite o preço do produto"
          type="number"
          valor={preco}
          aoAlterado={valor => setPreco(valor)}
        />
        <div className="estado-produto">
          <span>Estado</span>
          <label>
            <input
              type="radio"
              name="estado"
              value="Novo"
              checked={estado === 'Novo'}
              onChange={evento => setEstado(evento.target.value)}
            />
            Novo
          </label>
          <label>
            <input
              type="radio"
              name="estado"
              value="Usado"
              checked={estado === 'Usado'}
              onChange={evento => setEstado(evento.target.value)}
            />
            Usado
          </label>
        </div>
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  )
}

export default Formulario
