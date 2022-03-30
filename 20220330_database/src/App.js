import './App.css';
import StorageExample from './components/StorageExample';
import Pie from './components/Pie';
import TicTacToe from './components/TicTacToe';
import Player from './components/Player';

import React, { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState('X');
  const [winner, setWinner] = useState('');
  const [result, setResult] = useState({
    O: 0,
    X: 0,
    Draw: 0,
  });

  // Amikor uj nyertes van vagy draw akkor frissiti a localStorage-t illetve a result state-t is
  useEffect(() => {
    console.log('winner', winner)
    /* if (!winner) {

    } */
    if (winner !== '' && winner !== null) {

      let result;
      try {
        result = JSON.parse(localStorage.getItem('result'))
      } catch (error) {
        console.log(error)
      }

      if (!result) {
        result = {
          O: 0,
          X: 0,
          Draw: 0,
        }
      }

      result[winner] += 1;

      localStorage.setItem('result', JSON.stringify(result));
      setResult(result)
    }
  },[winner])

  // Componens letrejottekor betolti a localStoragebol a result-ot
  useEffect(() => {

    let result;
    try {
      result = JSON.parse(localStorage.getItem('result'))
    } catch (error) {
      console.log(error)
    }

    if (!result) {
      result = {
        O: 0,
        X: 0,
        Draw: 0,
      }
    }
    setResult(result)
  }, [])

  return (
    <div className="App">
{/*       <Player user={user} winner={winner} /> */}
      <TicTacToe setUser={setUser} user={user} winner={winner} setWinner={setWinner} />
  {/*     <StorageExample /> */}
      <div className="pie-container">
        <Pie data={ 
          [
            {
              "id": "X",
              "label": "X",
              "value": result?.X,
              "color": "hsl(68, 70%, 50%)"
            },
            {
              "id": "O",
              "label": "O",
              "value": result?.O,
              "color": "hsl(9, 70%, 50%)"
            },
            {
              "id": "Draw",
              "label": "Draw",
              "value": result?.Draw,
              "color": "hsl(235, 70%, 50%)"
            },
          ]
        } />
      </div>
    </div>
  );
}

export default App;
