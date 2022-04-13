import NavbarProfile from "../components/NavbarProfile"
import { Outlet } from 'react-router-dom';

function ProfileLayout({ userLogged }) {
  return (
    <>
      {
      userLogged ? (<div>
        <div><NavbarProfile /></div>
        <div><Outlet /></div>
      </div>) : <div>Az oldal megtekintesehez belepes szukseges! </div>
      }
    </>
  )
}

export default ProfileLayout;