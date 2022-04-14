import { NavLink } from 'react-router-dom';

const Navbar = ({ userLogged }) => {
    return (
        <>
            <ul className="nav border ">
                <li className="nav-item"><NavLink to='/about'>About Me</NavLink></li>
                <li className="nav-item"><NavLink to='/proficiency/'>Proficiency</NavLink></li>
                <li className="nav-item"><NavLink to='/reference'>Reference</NavLink></li>
                <li className="nav-item"><NavLink to='/blogposts'>Blog</NavLink></li>
                <li className="nav-item">
                   { userLogged ? <NavLink to='/profile'> Profile </NavLink> : <NavLink to='/login'> Login </NavLink> }
                </li>
            </ul>
        </>
    );
};

export default Navbar;
