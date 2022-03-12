import { useState } from "react";


function ArrayState() {
  const [list, setList] = useState([1, 2, 3, 4]); // tombok esetben referencia tipus ill ertek van tarolva

  const clickHandler = (event) => {
    // console.log('event', event)
 
    // Tombből elem törlés
    setList(prevArray => {        // prevArray ez meg mindig referencia ertek a tomb.
        const newArray = [...prevArray];  // uj tombot hozz letre a prevArray tombbol, igy a newArray az új referencia értékkel van
        newArray.splice(0, 1)  
        return newArray;
    })

    // Uj elem a tomb vegre 
    setList(prevArray => {
      const newArray = [...prevArray, "uj elem"];
      return newArray;
    })

    // Tomb elem ertekenek megvaltoztatasa
    setList(prevArray => {
      const newArray = [...prevArray];
      newArray[0] = 'modositva'
      return newArray;
    })
  }

  console.log('list', list)
 
  return (
    <div>
      <button onClick={ clickHandler } >Update</button><br />
      Tomb elemek: { list }
    </div>
  )
}

export default ArrayState;