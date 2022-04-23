
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout({ userLogged }) {

  return (
    <div className="main-layout">
      <header>Main layout</header>
        <Navbar userLogged={ userLogged } />
        <main className="border rounded"><Outlet /></main>
      <footer>Copyright...</footer>
    </div>
  )
}

export default MainLayout;