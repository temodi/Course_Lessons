import './Player.css';
import React from 'react';
import xPlayer from './images/player_X.png';
import oPlayer from './images/player_O.png';

const Player = ({ user, winner }) => {
  return (
    <div className="player">
      {winner ? 'Game Over' : <p>Next player: </p>}
      {winner ? '' : <img alt="user_avatar" src={user === 'X' ? xPlayer : oPlayer} />}
      <p>{winner ? '' : user}</p>
    </div>
  );
};

export default Player;
