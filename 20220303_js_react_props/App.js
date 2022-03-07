import './App.css';
import BasicProps from './components/BasicProps';
import BooleanProps from './components/BooleanProps';
import NumericProps from './components/NumericProps';
import StringProps from './components/StringProps';
import ObjectProps from './components/ObjectProps';
import Image from './components/Image';
import AnimalCard from './practice/AnimalCard';
import ArrayProps from './components/ArrayProps';

function App() {

  const logikaiVar = true;
  const numericVar = 3123;
  const strVar = "Helloka";
  const objVar = {
     id: 12,
     price: 123,
     item_name: "Phone",

  }

  const generateNumber = () => 42;
  const arr = ['a', 'b', 'c']
  const arrayFunc = () => ['hello', 'bello'];

  // const userLogged = true; // true, ha bevan lepve, false ha nincs belepve
 
  return (
    <>
      { /* <BasicProps content="hellok" />
  
      <BooleanProps logikaiTrue={ true } logikaiFalse={ false } logikaiVar={ logikaiVar } />

      <NumericProps number={ 231 } numberVar={ numericVar } numberFuncReturn={ generateNumber() } />
    
      <StringProps
        str1="Szoveg 1"
        str2={ "Szoveg 2" }
        str3={ strVar }
        str4={ `String literal: ${strVar} `}
        className="bg-red"
      />

      <ObjectProps 
        obj={ {
          name: 'Kiss Anna',
          age: 18,
          nickname: 'Annacska',
          } }
        objVar={ objVar }
      />
      <Image imageName="image.jpg" />

      */ }

      { /*
      <AnimalCard data={
        {
          id: 1,
          name: 'Béla',
          species: 'cica',
          age: 10,
          image: 'animal0001.jpg',
          pedigree: false,
          other: "Zsemle",
        } 
       } />

      <AnimalCard data={
        {
          id: 1,
          name: 'Béla2',
          species: 'cica',
          age: 10,
          image: 'animal0001.jpg',
          pedigree: true,
          other: null,
        } 
       } /> */ }

       <ArrayProps
         array = {
           [1, 2, 3, 4]
         }

         arrayVar = {
          arr
         }

         arrayFunc = {
           arrayFunc()
         }
       />
    </>     
  );
}

export default App;
