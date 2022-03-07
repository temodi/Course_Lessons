

function ArrayProps(props) {

  let tmpArray = [];

  props.array.forEach(elem => {
    if (elem % 2 == 0) {
      tmpArray.push(elem)
    }
  })

  return (
    <div>
      Összes eleme kiiratva: { props.array }<br />
      
      Páros elemek: { props.array.map((e) => {
          return e % 2 == 0 ? e : null;
      })}<br />

      HTML-ben az elemek: { props.array.map((e) => {
          return <strong>{ e }</strong>
      })}<br />

      Indexek: { props.array.map((elem, index) => { return index } )}
      <br />
      
      forEach paros: { tmpArray }<br />

      ArrayVar: { props.arrayVar }<br />

      ArrayFunc: { props.arrayFunc }<br />

      <br />
    </div>
  )
}

export default ArrayProps;