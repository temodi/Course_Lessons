import { useState, useEffect } from 'react'; 

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  // hook-ok top level helyezzuk el
  // useEffect 2 param
  // .1 effect callback fv / kotelezo
  // .2 dependency / dependecy array / opcionalis
  
  // 1. Ha nincs dependency parameter megadva (2. param), akkor MINDEN render utan lefuttja az effect-et
  useEffect(() => {
    // effect
    console.log('useEffect lefutott, nincs dependecy');
  })

  // 2. Ha van üres dependecy array megadva (2. param), akkor 1x az elso render utan lefuta az effect
  // a class component / componentDidMount metoudsnak felel meg.
  useEffect(() => {
    console.log('useEffect lefutott, dependecy: []')
  }, [])

  // 3. Ha van megadva változo az dependecey array-ben (2. param), lefutattja az effectet, abban az esetben, ha a változó változot
  // vagyis a state valtoztt
  // a class component / componentDidUpdate 
  /* 
    if (previousCount != count) {
      // fuggvenyhivas()
      prevousCount = count;
    }
  */
  useEffect(() => {
    console.log('useEffect lefuttot, dependecy: [clicked]')
  }, [clicked])

 
  const inc = (event) => {
      setCount(count => count + 1);
  }

  const clickHandler = (event) => {
    setClicked(true)
  }

  console.log("UseEffectComponent render")
  return (
    <div>Hello useEffect { count }

      <button type="button" onClick={ inc }>Click me!</button>
      <button type="button" onClick={ clickHandler }>1x</button>
    </div>

  )
}

export default UseEffectComponent;