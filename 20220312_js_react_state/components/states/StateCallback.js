import { useState } from 'react';

function StateCallback() {
  const [str, setStr] = useState('kezdo ertek');

  const clickHandler = (event) => {

    // setStr('kov. ertek')
     const cb = (prevStr) => {
       console.log('lefutott a cb')
       console.log('prevStr', prevStr);
       return prevStr + ' <==> ez lesz a kov ertek';
     }
     setStr(cb); // ehelyett: setStr(str +  ' <==> ez lesz a kov ertek')

  }

  return (<div>
    <button onClick={ clickHandler }>Change str</button><br />
    str ertek: { str }
  </div>)
}

export default StateCallback;