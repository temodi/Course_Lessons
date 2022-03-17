import './App.css';
import Slider from './components/slider/Slider';

function App() {

  const images = [
    'https://www.w3schools.com/w3css/img_forest.jpg',
    'https://www.w3schools.com/w3css/img_mountains.jpg',
    'https://www.w3schools.com/w3css/img_snowtops.jpg',
  ]

  const images2 = [
    'https://www.w3schools.com/w3css/img_la.jpg',
    'https://www.w3schools.com/w3css/img_ny.jpg',
  ]

  return (
    <div className="App">
      <Slider images={ images } defaultIndex={ 0 } />

      <Slider images={ images2 } defaultIndex={ 1 } />
    </div>
  );
}

export default App;
