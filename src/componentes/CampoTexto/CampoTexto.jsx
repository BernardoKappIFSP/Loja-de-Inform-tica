import './CampoTexto.css'

const CampoTexto = props => {
  const aoDigitado = evento => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.valor}
        onChange={aoDigitado}
        placeholder={props.placeholder}
        required
      />
    </div>
  )
}

export default CampoTexto
