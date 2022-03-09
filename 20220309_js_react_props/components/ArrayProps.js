

function ArrayProps(props) {

  let tmpArray = [];

  props.array.forEach(elem => {
    if (elem % 2 === 0) {
      tmpArray.push(elem)
    }
  })

  const evenNumber = (e) => e % 2 === 0 ? e : null;
  const htmlArrayElem = (e, index) => <strong key={ `htmllista_${index}` }>{ e }</strong>;
  const justIndex = (elem, index) => index;

  const evenNumberArray = props.array.map(evenNumber);

  return (
    <div>
      Összes eleme kiiratva: { props.array }<br />
      Páros elemek: { evenNumberArray }<br />
      HTML-ben az elemek: { props.array.map(htmlArrayElem) }<br />
      Indexek: { props.array.map(justIndex) }
      <br />
      forEach paros: { tmpArray }<br />
      ArrayVar: { props.arrayVar }<br />
      ArrayFunc: { props.arrayFunc }<br />
      Páros elemek megegyszer: { evenNumberArray }<br />
      <br />
    </div>
  )
}

export default ArrayProps;