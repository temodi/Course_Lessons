import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

function NavbarProfile() {
  return (
     <div>
        <Link to="/profile">Adatlap</Link> <br />
        <Link to="/new-post">Uj blog post</Link><br />
        <Link to="/logout" onClick={ () => { signOut(auth) } }> Kilepes</Link> <br />
     </div>
  )
}

export default NavbarProfile;