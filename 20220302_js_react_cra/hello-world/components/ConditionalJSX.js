
// logical &&
export function Conditional1() {
  const enableItem = true;

  return (
    <div>
      <p>Elem 1</p>
      <p>Elem 2</p>
      { /* Ha enableItem igaz, akkor adja vissza az && utáni részt */ }
      { enableItem && <p>Elem 3</p> }
      <p>Elem 4</p>
    </div>
  )
}

// ternary operatorral
export function Conditional2() {
  const enableItem = false;

  return (
    <div>
      <p>Elem 1</p>
      <p>Elem 2</p>
      { /* valami ? valami1 : valami2 */ }
      { enableItem ? <p>Elem 3</p>: <p>Elem 3 nincs engedelyzve</p> }
      <p>Elem 4</p>
    </div>
  )
}

export function Conditional1Prevent() {
  const enableItem = false;

  return (
    <>
      { enableItem && (<div>
          <p>Elem 1</p>
          <p>Elem 2</p>
          <p>Elem 3</p> 
          <p>Elem 4</p>
        </div>)
      } 
    </>
  )
}

// prevent render / megadalyozom a megjelniteset a Componentnek
export function Conditional3() {
  const disableComponent = false;

  if (disableComponent) {
      return null;
  }
 
  return (
    <div>Component megjelenik</div>
  )
}


// with variable
export function Conditional4() {
  let selectedElem;

  if (true) {
    selectedElem = <li>Selected Elem 1</li>
  } else {
    selectedElem = <li>Selected Elem 2</li>
  }

  return <>
  { selectedElem }
    </>
}
 