import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import CounterShow from '../components/CounterShow';

function NavBar() {
  const userName = useContext(UserContext);

  return <div>NavBar: { userName } <br /> <CounterShow /></div>
}

export default NavBar;