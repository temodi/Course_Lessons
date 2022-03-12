
import { useState } from "react";


function StateComponent() {
  // kezdo ertek adas a state-nek: useState parametere

  let [state, setState]  = useState('Kezdo ertek') // state valtozo es fv letrehozas
  // useState egy tömmbel tér vissza
  // state = tomb[0] , setState = tomb[1]

  // console.log('state erteke', state, setState);
 
  console.log('StateComponent render')
  return (
    <div>
      Hello State: { state }
    </div>
  )
}

export default StateComponent;