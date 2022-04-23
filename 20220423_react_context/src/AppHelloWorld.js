import { createContext, useContext } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

// Contextus létrehozása és használata (React Context API)
// 1. létrehozni egy context objektumot a createContext fv-el
// 2. (contextobjektum).Provider componens-be elhelyezni azokat a componesekt, amikor hozza ferne a contexushoz
// 3. (contextobjektum).Provider props-ban value propsot beallitani
// 4. a child componensekben, useContext(contextobjektum) -al a value lekerdezheto es utana felhasznalhato

// createContext opcionalis 1 parameter, ami a defaultValue, akkor kapja meg a useConext vagy child, ha a child componens
// nincs contextus Providerben 
const HelloWorldContext = createContext();

function Child3() {
  const hWValue = useContext(HelloWorldContext);
  return <div>Child 3 componens: { hWValue } </div>
}

function App() {
  console.log('HelloWorldContext', HelloWorldContext)
   
  return (<div className="App">
    Main componens<br />
    <HelloWorldContext.Provider value={ "Hello World" }>
      <Child1 />
      <Child2 />
      <Child3 />
    </HelloWorldContext.Provider>

{/*     <Child2 value={ "Hello world" } />
    <Child1 value={ "Hello world" } />
    <Child3 value={ "Hello world" } /> */}
  </div>)

}

export default App;