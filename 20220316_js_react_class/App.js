import './App.css';
import Header from './classComponents/Header';

function App() {
  return (
    <div className="App">      
      <Header title={ "Hello Class Component with Props" } subTitle="Helloka" />
    </div>
  );
}

export default App;
