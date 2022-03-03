 
import './App.css';
import BasicProps from './components/BasicProps';
import BooleanProps from './components/BooleanProps';
import NumericProps from './components/NumericProps';
import StringProps from './components/StringProps';

function App() {

  const logikaiVar = true;
  const numericVar = 3123;
  const strVar = "Helloka";

  const generateNumber = () => 42;

  // const userLogged = true; // true, ha bevan lepve, false ha nincs belepve

  return (
    <>
      <BasicProps content="hellok" />
      <BooleanProps logikaiTrue={ true } logikaiFalse={ false } logikaiVar={ logikaiVar } />

      <NumericProps number={ 231 } numberVar={ numericVar } numberFuncReturn={ generateNumber() } />
    
      <StringProps
        str1="Szoveg 1"
        str2={ "Szoveg 2" }
        str3={ strVar }
        str4={ `String literal: ${strVar} `}
        className="bg-red"
      />
    </>     
  );
}

export default App;
