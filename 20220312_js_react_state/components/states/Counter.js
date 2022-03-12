import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const clickHandler = (event) => {
    // prev -> aktualis state allapot
    // count + 1
    // ha felakarom hasznalni az eredeti state változómat (itt a counter), akkor callback-et használunk
    // a state beállító függvénynél (setCount)
    // a callback első parameter tartalmazza az aktuális state változó értéket (ált prev-nek nevezzük a parametert)
    // a callback return után adom meg az új értéket, amit állítsonbe a state változónak
    const countCallback = (prevCount) => {
      return prevCount + 1;
    }
    setCount(countCallback); // countCallback(count) ahhol count = 1 => visszater 2-vel
  }

  console.log('Counter render')
  return (
    <div>
      <button onClick={ clickHandler }>Count</button><br />
      Count értéke: { count }
    </div>
  )
}

export default Counter;