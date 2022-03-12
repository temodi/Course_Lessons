import { useState } from 'react';

function Child1Component({ setParentComponentData }) {
  const [data, setData] = useState('');

  const changeHandler = (event) => {
    setData(event.target.value); // Child1Component statetjet
    setParentComponentData(event.target.value) // ParentComponent statetjet fogja allitani
  }

  
  console.log('Child1 render data:', data);

  return (<div>
    <form>
      <input type="text" name="data" onChange={ changeHandler } /><br />
      Child1 data: { data }
    </form>
  </div>)
}

export default Child1Component;