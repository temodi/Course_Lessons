import NavbarProfile from "../components/NavbarProfile"
import { Outlet } from 'react-router-dom';

function ProfileLayout({ userLogged }) {
  return (
    <div className="d-flex flex-row">
      {
      userLogged ? (<>
        <div><NavbarProfile /></div>
        <div><Outlet /></div>
      </>) : <div>Az oldal megtekintesehez belepes szukseges! </div>
      }
    </div>
  )
}

export default ProfileLayout;