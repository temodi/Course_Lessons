import { useEffect, useState } from 'react';

function UseEffectCleanup() {

  const [lastKey, setLastKey] = useState()

  // useEffect cleanup fv (ami a class/componentWilUnmount metodus)
  // vagyis amikor torli/unmountolja a komponenst, akkor ez meghivodik és takarithatunk benne
  // pl: timer-t felaszabaditani, leiratokozni esemeny/esemeny kezelokrol/ server fele valamit kuldeni ha szukseges

  const keyDown = (event) => {
    console.log(event.type, event.key, event.keyCode);
    setLastKey(event.key);
  }

  useEffect(() => {

    document.addEventListener("keydown", keyDown);
    
    return () => {
      // cleanup fv-e
      document.removeEventListener("keydown", keyDown);
    }
  }, []) 

  return (
    <div>Hello {lastKey}</div>
  )
}

export default UseEffectCleanup;