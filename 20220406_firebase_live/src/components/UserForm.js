import { useState, useCallback, useEffect } from 'react';
import { createUser, readUser, updateUser } from '../services/crud';

function UserForm({ updateKey, setUpdateKey }) {
  const [userData, setUserData] = useState();
  const [success, setSuccess] = useState(false);
 
  useEffect(() => {
    if (updateKey) {
      readUser(updateKey)
      .then((snapshot) => setUserData(snapshot.val()))
    }
  }, [updateKey])

  const submitHandler = (event) => {

    event.preventDefault();
    
    if (updateKey) {
      
      updateUser(updateKey, userData)
      .then(() => {
        setUserData({
          email: '',
          username: '',
          name: '',
          gender: '',
          other: '',
        })
        setSuccess(true)
        setUpdateKey(null);
      })
      .catch(e => console.log(e))

    } else {
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

  }

  const changeHandler = useCallback((event) => setUserData(p => ({...p, [event.target.name]: event.target.value })), [])
 
  console.log('userData', userData)

  return <div className="user-form">
    {success && <h2>Sikeres mentes</h2>}
    Update key: { updateKey }
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
        <input type="text" name="username" id="username" onChange={ changeHandler } value={ userData?.username } />
      </label>
      <label htmlFor="gender">
        <input type="radio" name="gender" value="male" onChange={ changeHandler } checked={ userData?.gender === 'male' ? true: false } /><span>Male</span>
        <input type="radio" name="gender" value="female"  onChange={ changeHandler }  checked={ userData?.gender === 'female' ? true: false } /><span>Female</span>
      </label>
      <label htmlFor="other">
        <textarea name="other" onChange={ changeHandler } value={ userData?.other } ></textarea>
      </label>
      <button type="submit" name="SAVE">Save</button>
    </form>
  </div>
}

export default UserForm