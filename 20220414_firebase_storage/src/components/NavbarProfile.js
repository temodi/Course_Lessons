import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

function NavbarProfile() {
  return (
     <div className="nav flex-column">
        <Link className="nav-item" to="/">Főoldal</Link> <br />
        <Link className="nav-item" to="/profile">Adatlap</Link> <br />
        <Link className="nav-item" to="/new-post">Uj blog post</Link><br />
        <Link className="nav-item" to="/logout" onClick={ () => { signOut(auth) } }> Kilepes</Link> <br />
     </div>
  )
}

export default NavbarProfile;