

function PropsDestructuringWithProps(props) {
  return (
    <div>
      <img src={ props.src }  alt={ props.alt }  />
      { props.label }
    </div>
  )
}


function PropsDestructuring({ src, alt, label }) {
  return (
    <div>
      <img src={ src } alt={ alt } />
      { label }
    </div>
  )
}

export default PropsDestructuring;