import { useState, useEffect } from 'react';
import { patchAPI, getAPI } from '../service/firebaseAPI';
import { databaseUrl } from '../config/database';

function InputSave() {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    getAPI(databaseUrl,'input.json', (data) => {
      setInputValue(data?.email)
    })
  }, [])

  const onChangeHandler = (event) => {
    patchAPI(databaseUrl, 'input.json', {
      email: event.target.value
    }, (response) => { console.log(response) });

    setInputValue(event.target.value)
  }

  return (
    <>
     <input type="text" name="email" onChange={ onChangeHandler } value={ inputValue } />
    </>
  )
}

export default InputSave