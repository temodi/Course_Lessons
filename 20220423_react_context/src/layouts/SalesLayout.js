
import { Outlet, Link } from 'react-router-dom';

function SalesLayout() {

  return (
    <div className="sales-layout">
        <ul>
          <li><Link to="/sales-page-1">Sales page 1</Link></li>
          <li><Link to="/sales-page-2">Sales page 2</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default SalesLayout;