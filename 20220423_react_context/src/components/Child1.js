
function Child1AllComponent({ value }) {
  return (<div>{ value }</div>)
}

function Child1({ value }) {
  return <div>Child 1 componens <Child1AllComponent value={ value } /></div>
}

export default Child1;