import { useState } from 'react';

function Child1({ changeData }) {
  const [data, setData] = useState('');

  const changeHandler = (event) => {
    setData(event.target.value);
    changeData(event.target.value);
  }

  
  console.log('Child1 render data:', data);

  return (<div>
    <form>
      <input type="text" name="data" onChange={ changeHandler } /><br />
      Child1 data: { data }
    </form>
  </div>)
}

export default Child1;