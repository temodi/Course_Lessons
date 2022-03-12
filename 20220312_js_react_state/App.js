
import './App.css';
import StateComponent from './components/states/StateComponent';
import ClickComponent from './components/states/ClickComponent';
import Counter from './components/states/Counter';
import StateCallback from './components/states/StateCallback';
import Toggle from './components/states/Toggle';
import ArrayState from './components/states/ArrayState';
import ObjState from './components/states/ObjState';
import Form from './components/forms/Form';

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
{/*   <Toggle /> */}
{/*   <ArrayState /> */}

      <ObjState />
      <Form />
    </div>
  );
}

export default App;
