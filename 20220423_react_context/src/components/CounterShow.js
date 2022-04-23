import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function CounterShow() {
  const counterContextValue = useContext(CounterContext);

  return <div>Counter: <small>{ counterContextValue?.counter }</small></div>
}

export default CounterShow;