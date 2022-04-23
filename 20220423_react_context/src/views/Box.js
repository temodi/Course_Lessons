import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Box() {
  const userName = useContext(UserContext);

  return <div>Box, username: <strong>{ userName }</strong>  </div>
}

export default Box;