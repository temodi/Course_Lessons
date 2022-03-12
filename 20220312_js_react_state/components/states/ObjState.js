import { useState } from "react";

function ObjState() {
  const [obj, setObj] = useState({ id: 1, product_name: 'iPhone 8' });  

  const clickHandler = (event) => {
     
    // Objektum property értékének módosítása
    setObj(prevObj => {
      const newObj = {...prevObj} // uj objektum letrehozasa
      newObj.product_name = 'iPhone 12';
      return newObj;
    })

    // Uj property hozzadasa
    setObj(prevObj => {
      const newObj = {...prevObj, battery_size: "4000mA"} // uj objektum letrehozasa és új property hozzaadas
      return newObj;
    })

  }

  console.log('obj', obj)
  return (
    <div>
      <button onClick={ clickHandler } >Update</button><br />   
      Termek neve: { obj.product_name }<br />
      Akksi: { obj?.battery_size }
    </div>
  )
}

export default ObjState;