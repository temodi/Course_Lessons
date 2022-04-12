import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  
  return (<div>
    User:
    <input type="text" name="email" />
    <input type="text" name="password" />
    <button type="button">Log in</button>
  </div>)
}

export default Login;