import { useEffect, useState } from 'react';
import './App.css';
import UserManagementScreen from './views/UserManagementScreen';
import ChatScreen from './views/ChatScreen';
import SignUpScreen from './views/SignUpScreen';
import SignInScreen from './views/SignInScreen';
import { auth } from './config/firebase';


function App() {
  const [userLogged, setUserLogged] = useState(false);

  console.log('App render')

  useEffect(() => {

    const user = auth.currentUser
    console.log(user)
    if (user) {
      console.log('belepve')
    } else {
      console.log('nincs belepve')
    }

  }, [userLogged])

  return (
    <div className="App">
    {/*   <UserManagementScreen /> */}
    <SignUpScreen />
    <SignInScreen setUserLogged={ setUserLogged }/>
    {userLogged && <ChatScreen />}  

    </div>
  );
}

export default App;
