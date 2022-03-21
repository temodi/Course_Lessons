import { useState, useEffect } from 'react'; 

function JsonMath() {
  const [sum, setSum] = useState();

  useEffect(() => {
    fetch('https://fervent-clarke-e660e0.netlify.app/math.json')
    .then(response => response.json())
    .then(json => setSum(json.a + json.b))
  }, [])

  const changeHandler = (event) => {
    const value = event.targe.value; // +, - .. 

    if (['+', '-', '/', '*', '%', '**'].indexOf(value) !== -1 ) {
      // letarolod
    }

  }
  return (
    <>
      <div>Eredmény: <strong>{ sum }</strong></div>
      <input type="text" onChange={ changeHandler } />
    </>
  )
}

export default JsonMath;