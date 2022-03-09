import './App.css';
import ArrayProps from './components/ArrayProps';
import FuncProps from './components/FuncProps';

const arr = ['a', 'b', 'c']
const arrayFunc = () => ['hello', 'bello'];

const helloFuncVar = () => { return `Hello Function Var` }

const kiirFunc = (str) => `Hello ${str}`;

const dateFormat = () => new Date(Date.now()).toString()
 
function App() {
  return (
    <div className="App">
      
{/*       <ArrayProps
         array = {
           [1, 2, 3, 4]
         }

         arrayVar = {
          arr
         }

         arrayFunc = {
           arrayFunc()
         }
       /> */}
      <FuncProps
         helloFunction = { () => { return `Hello Function` } }
         helloFuncVar = { helloFuncVar }
         dateFormat= { dateFormat }
         kiirFunc={ kiirFunc }
         kiirStr={ 'React' }
      />
    </div>
  );
}

export default App;
