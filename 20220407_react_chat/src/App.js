import { useEffect } from 'react';
import './App.css';
import UserManagementScreen from './views/UserManagementScreen';
import ChatScreen from './views/ChatScreen';

function App() {
 
  console.log('App render')
  return (
    <div className="App">
    {/*   <UserManagementScreen /> */}
    <ChatScreen />
    </div>
  );
}

export default App;
