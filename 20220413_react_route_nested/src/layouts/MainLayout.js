
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {

  return (
    <div className="main-layout">
        <header>Main layout</header>
          <Navbar />
          <Outlet />
        <footer>Copyright...</footer>
    </div>
  )
}

export default MainLayout;