
import { Outlet } from 'react-router-dom';

function LoginLayout() {

  return (
    <div className="login">
      <div className="box">
        <Outlet />
      </div>
  </div>
  )
}

export default LoginLayout;