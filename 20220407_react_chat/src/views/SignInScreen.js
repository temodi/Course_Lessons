
import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function SignInScreen({ setUserLogged }) {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event) => setInputData(prev => ({...prev, [event.target.name] : event.target.value }))

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, inputData.email, inputData.password)
    .then((userCredential) => {
      console.log(userCredential.user)
      // itt a felhasznalo mar bevan leptetve
      setUserLogged(true)
    })
    .catch(e => console.log(e))
 }

 return <>
 <form onSubmit={ submitHandler }>
  E-mail: <input type="text" name="email" onChange={ changeHandler }/><br />
  Password: <input type="password" name="password" onChange={ changeHandler } /><br />
  <button type="submit">Sign In</button>
  <button type="button" onClick={ (event) => {
    signOut(auth);
    setUserLogged(false)
  } } >Sign Out</button>
  </form>
 </>
}

export default SignInScreen