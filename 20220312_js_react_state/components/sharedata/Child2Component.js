
function Child2Component({ data }) {

  console.log('Child2 render data:', data)
  return (<div>
    Child2 data: { data }
  </div>)
}

export default Child2Component;