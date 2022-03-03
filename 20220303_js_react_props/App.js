 
import './App.css';
import BasicProps from './components/BasicProps';
import BooleanProps from './components/BooleanProps';
import NumericProps from './components/NumericProps';


function App() {

  const logikaiVar = true;
  const numericVar = 3123;

  const generateNumber = () => 42;

  // const userLogged = true; // true, ha bevan lepve, false ha nincs belepve

  return (
    <>
     <BasicProps content="hellok" />
     <BooleanProps logikaiTrue={ true } logikaiFalse={ false } logikaiVar={ logikaiVar } />

     <NumericProps number={ 231 } numberVar={ numericVar } numberFuncReturn={ generateNumber() } />
    

    </>     
  );
}

export default App;
