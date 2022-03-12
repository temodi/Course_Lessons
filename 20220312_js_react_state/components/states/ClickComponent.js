import { useState } from "react"; 

function ClickComponent() {
  const [clicked, setClicked] = useState(false)

  const clickHandler = (event) => {
    setClicked(true);
  }

  
  console.log('ClickComponent render lefutott');

  return (
    <>
      <button onClick={ clickHandler }> Hello </button><br />
      Clicked valtozo ertek: { String(clicked) }
    </>
  )
}

export default ClickComponent;