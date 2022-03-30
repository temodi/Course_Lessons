import { useState, useEffect } from 'react';

function StorageExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storageData = localStorage.getItem('inputData')
    const inputData = JSON.parse(storageData)
 
    setName(inputData?.name);
    setEmail(inputData?.email);
  }, [])

  const onSubmit = (event) => {
    event.preventDefault(); 
 
   /*  const inputData = {
      name: event.target[1].value,
      email: event.target[2].value
    } 
    console.log(inputData);
    */

    const inputData = {
      name,
      email,
    }
    console.log(inputData);
    localStorage.setItem('inputData', JSON.stringify(inputData));
  }

  const onChangeHandler = (event) => {

    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }

  }
 
  return <>
    <form onSubmit={ onSubmit }>
      <input type="text" name="name" onChange={ onChangeHandler } value={ name } />
      <input type="text" name="email" onChange={ onChangeHandler } value={ email }/>
      <button>Save</button>
    </form>
  </>
}

export default StorageExample;