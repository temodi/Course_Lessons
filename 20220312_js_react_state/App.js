
import './App.css';
import StateComponent from './components/states/StateComponent';
import ClickComponent from './components/states/ClickComponent';
import Counter from './components/states/Counter';
import StateCallback from './components/states/StateCallback';
import Toggle from './components/states/Toggle';

function App() {

  console.log('App component render');
  return (
    <div className="App">
 {/*      <StateComponent /> */}
      <ClickComponent />  
{/* 
      <Counter />
      <br />
      <StateCallback /> */}

      <Toggle />
    </div>
  );
}

export default App;
