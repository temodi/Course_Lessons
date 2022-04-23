import { useState, useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

function CounterButton() {
  const counterContextValue = useContext(CounterContext);
  /*  {
        counter: counter,
        setCounter: setCounter,
        increment: increment
      }
  */
  
  console.log('counterContextValue', counterContextValue);

  return <div>
      Counter: { counterContextValue?.counter }
      <button type="button" onClick={ counterContextValue?.increment }>Inc!</button>
    </div>
}

export default CounterButton;