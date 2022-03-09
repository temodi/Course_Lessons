import './App.css';
import ArrayProps from './components/ArrayProps';
import FuncProps from './components/FuncProps';

const arr = ['a', 'b', 'c']
const arrayFunc = () => ['hello', 'bello'];

const helloFuncVar = () => { return `Hello Function Var` }

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
      />
    </div>
  );
}

export default App;
