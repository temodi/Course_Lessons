import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigateTo = useNavigate();

  const emailChangeHandler = (event) => setEmail(event.target.value);
  const pwdChangeHandler = (event) => setPassword(event.target.value); 

  const signUpHandler = (event) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((authCredential) => {
      // Sikeres volt a regisztracio
      console.log('user', authCredential.user);
      console.log('user', auth?.currentUser);
      navigateTo('/profile');
    })
    .catch(e => console.log(e));
  
  }

  const signInHandler = (event) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((authCredential) => {
      // Sikeres volt a belepes a usernek
      console.log('user', authCredential.user);
      navigateTo('/profile');
    })
    .catch(e => {
      setLoginError(e?.message)
      console.log(e?.message)
    });
  }

  return (
    <>
      { loginError }
      <input type="text" name="email" onChange={ emailChangeHandler } />
      <input type="text" name="password" onChange={ pwdChangeHandler } />
      <button type="button" onClick={ signUpHandler }>Sign up</button>
      <button type="button" onClick={ signInHandler }>Sign in</button>
    </>)
}

export default Login;