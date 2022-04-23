import { useState } from 'react';
import './App.css';
import NavBar from './views/NavBar'; 
import Main from './views/Main';
import { UserContext } from './context/UserContext';
import { CounterContext } from './context/CounterContext';


const userName = 'kjolan';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1);


  return (<div className="App">

    <UserContext.Provider value={ userName }>
      <CounterContext.Provider value={ {
        counter: counter,
        setCounter: setCounter,
        increment: increment,
      } }>
        <NavBar />
        <Main />
      </CounterContext.Provider>
    </UserContext.Provider>
  </div>)

}

export default App;