import { useState } from 'react';

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = (event) => {
    /*
     function (prevToggleValue) {
       if (prevToggleValue) {
         return false
       }
       else {
         return true;
       }
     }

     (prevToggleValue) => {
        return !prevToggleValue
     }
    */
    setToggle(prevToggleValue => !prevToggleValue)
  }

  return (
    <div>
      <button onClick={ clickHandler }> Click me! </button><br />
      {toggle ? 'Megjelenhet' : 'Nem jelenhet meg' }      
    </div>
  )
}

export default Toggle;
