import { createContext, useContext, useState } from 'react';

import './App.css';

const HelloWorldContext = createContext('No provider')

function Component({ props })  {
  return <div>
    Child Component:
    <HelloWorldContext.Consumer>
      { value => <strong>{ value }</strong>}
    </HelloWorldContext.Consumer>
  </div>
}

function ComponentWithHook({ props }) {
  const helloWorldValue = useContext(HelloWorldContext);

  return (<div>
    Child ComponentWithHook:
    <strong>{ helloWorldValue }</strong>
  </div>);

}

function App() {
  console.log('HelloWorld', HelloWorldContext)
  return (
    <div className="App">
      <HelloWorldContext.Provider value={ "Hello World" } >
        <Component />
        <ComponentWithHook />
      </HelloWorldContext.Provider>
    </div>
  );
}

export default App;
