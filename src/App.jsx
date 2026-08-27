import { useState } from 'react'
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario'
import Area from './componentes/Area/Area'

const App = () => {
  const secoes = [
    {
      nome: 'Computadores',
      corPrimaria: '#1f6feb',
      corSecundaria: '#eaf2ff'
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#8b5cf6',
      corSecundaria: '#f2edff'
    },
    {
      nome: 'Impressoras',
      corPrimaria: '#16a34a',
      corSecundaria: '#eaf8ee'
    },
    {
      nome: 'Games',
      corPrimaria: '#dc2626',
      corSecundaria: '#ffeded'
    },
    {
      nome: 'Gadgets',
      corPrimaria: '#d97706',
      corSecundaria: '#fff5e6'
    }
  ]

  const marcas = [
    {
      nome: 'HP',
      imagem: '/marcas/hp.svg'
    },
    {
      nome: 'Dell',
      imagem: '/marcas/dell.svg'
    },
    {
      nome: 'Positivo',
      imagem: '/marcas/positivo.svg'
    },
    {
      nome: 'Asus',
      imagem: '/marcas/asus.svg'
    },
    {
      nome: 'Xing Ling genérico',
      imagem: '/marcas/xing-ling.svg'
    }
  ]

  const listaSecoes = secoes.map(secao => secao.nome)
  const listaMarcas = marcas.map(marca => marca.nome)

  const [produtos, setProdutos] = useState([])

  const adicionaProduto = produto => {
    let imagemMarca = ''

    for (let i = 0; i < marcas.length; i++) {
      if (marcas[i].nome === produto.marca) {
        imagemMarca = marcas[i].imagem
      }
    }

    const novoProduto = {
      ...produto,
      imagemMarca: imagemMarca
    }

    setProdutos([...produtos, novoProduto])
  }

  return (
    <div>
      <Banner />
      <Formulario
        secoes={listaSecoes}
        marcas={listaMarcas}
        aoProdutoCadastrado={produto => adicionaProduto(produto)}
      />
      {secoes.map(secao => (
        <Area
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter(produto => produto.secao === secao.nome)}
        />
      ))}
    </div>
  )
}

export default App
