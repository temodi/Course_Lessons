
 /*  const clickHandlerUpdate2 = (key) => {
    return (event) => {
      setUpdateKey(key)
    }
  } */
  
  /* Arrow functions */
 
  const arrow1 = () => console.log('hello')
  const arrow2 = param1 => console.log('hello', param1);
  const arrow3 = (param1, param2) => console.log('hello', param1, param2)
  const arrow4 = () => {
    console.log('nincs')
    console.log('param 1 nel tobb utasitas');
    return null
  }

  const arrow5 = param1 => {
    console.log('tobb utasitas')
    console.log(param1)
    return null;
  }

  const arrow6 = (param1, param2) => {
    console.log('tobb utasitas')
    console.log(param1)
    console.log(param2);
    return null;
  }

  const objDest = ({ prop1, prop2}) => {
    console.log(prop1, prop2)
  }
  objDest({ prop1: 'valami', prop2: valami })  