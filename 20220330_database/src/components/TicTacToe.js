import React, { useEffect, useState } from 'react';
import './TicTacToe.css';

const TicTacToe = ({ user, setUser, winner, setWinner }) => {
  let [counter, setCounter] = useState(0);
  const [position, setPosition] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  
  const clickHandler = (rowIndex, columnIndex) => {
    return () => {
      if (!winner) {
        if (!position[rowIndex][columnIndex]) {
          if (user === 'X') {
            setPosition((prev) => {
              const newarr = [...prev];
              newarr[rowIndex][columnIndex] = 'X';
              return newarr;
            });
            setUser('O');
            setCounter((prev) => counter++);
          }
          if (user === 'O') {
            setPosition((prev) => {
              const newarr = [...prev];
              newarr[rowIndex][columnIndex] = 'O';
              return newarr;
            });
            setUser('X');
            setCounter((prev) => counter++);
          }
        }
      }
    };
  };

  useEffect(() => {
    position.forEach((outerItem, outerIndex) => {
      if (outerItem[0] && outerItem[0] === outerItem[1] && outerItem[0] === outerItem[2]) {
        setWinner(outerItem[0]);
      }
      outerItem.forEach((innerItem, innerIndex) => {
        if (
          position[outerIndex][innerIndex] &&
          position[0][innerIndex] === position[1][innerIndex] &&
          position[0][innerIndex] === position[2][innerIndex]
        ) {
          setWinner(outerItem[innerIndex]);
        }
        if (
          position[outerIndex][innerIndex] &&
          position[0][0] === position[1][1] &&
          position[0][0] === position[2][2]
        ) {
          setWinner(position[0][0]);
        }
        if (
          position[outerIndex][innerIndex] &&
          position[0][2] === position[1][1] &&
          position[0][2] === position[2][0]
        ) {
          setWinner(position[0][2]);
        }
      });
    });
  }, [position, setWinner]);

  useEffect(() => {
    if (counter === 9 && !winner) {
      setWinner('Draw');
    }
  }, [counter, setWinner, winner]);

  const resetHandler = (event) => {
    event.preventDefault();
    setPosition([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setWinner('');
    setUser('X');
    setCounter(0);
  };
  return (
    <div className="container">
      <div className="output">
        <p>Winner: {winner ? winner : ''}</p>
      </div>
      <div className="board">
        {position.map((row, rowIndex) =>
          row.map((column, columnIndex) => (
            <button
              type="button"
              className="button"
              onClick={clickHandler(rowIndex, columnIndex)}
              value={position[rowIndex][columnIndex]}
              key={`${rowIndex}_${columnIndex}`}
            >
              {position[rowIndex][columnIndex]}
            </button>
          ))
        )}
      </div>
      <button className="resetbtn" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
export default TicTacToe;
