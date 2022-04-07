import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen() {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (event) => setInputData(prev => ({...prev, [event.target.name] : event.target.value }))
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputData);
    createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
    .then((userCredential) => {
      console.log(userCredential.user)
      // itt a felhasznalo mar bevan leptetve
    })
    .catch(e => console.log(e))
 }

  return (<>
  <form onSubmit={ submitHandler }>
   E-mail: <input type="text" name="email" onChange={ changeHandler }/><br />
   Password: <input type="password" name="password" onChange={ changeHandler } /><br />
   <button type="submit">Sign Up</button>
   </form>
  </>)
}

export default SignUpScreen;