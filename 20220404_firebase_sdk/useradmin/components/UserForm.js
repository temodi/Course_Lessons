import { useState, useCallback } from 'react';
import { createUser } from '../services/crud';

function UserForm() {
  const [userData, setUserData] = useState();
  const [success, setSuccess] = useState(false);
  /*
   userData = {
     email: 'ava',
     username: 'baba',
     name: 'baba',
     gender: 'male',
     other: 'bababa',
   }
  */

  const submitHandler = (event) => {
    event.preventDefault();
    createUser(userData)
    .then(() => {
      setUserData({
        email: '',
        username: '',
        name: '',
        gender: '',
        other: '',
      })
      setSuccess(true)
    })
  }

  const changeHandler = useCallback((event) => setUserData(p => ({...p, [event.target.name]: event.target.value })), [])

  /* const changeHandler = (event) => {
    setUserData(p => {
      const inputName = event.target.name;
      const newObj = {...p}
      newObj[inputName] = event.target.value;
      return newObj
    })
  } */

  console.log('userData', userData)

  return <div>
    {success && <h2>Sikeres mentes</h2>}
    <form onSubmit={ submitHandler }>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id="name" onChange={ changeHandler } value={ userData?.name || '' } />
      </label>
      <label htmlFor="email">
        Email:
        <input type="text" name="email" id="email" onChange={ changeHandler } value={ userData?.email } />
      </label>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" id="username" onChange={ changeHandler } />
      </label>
      <label htmlFor="gender">
        <input type="radio" name="gender" value="male" onChange={ changeHandler } />Male
        <input type="radio" name="gender" value="female"  onChange={ changeHandler } /> Female
      </label>
      <label htmlFor="other">
        <textarea name="other" onChange={ changeHandler }></textarea>
      </label>
      <button type="submit" name="SAVE">Save</button>
    </form>
  </div>
}

export default UserForm