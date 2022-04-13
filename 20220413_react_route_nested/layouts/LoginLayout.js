
import { Outlet } from 'react-router-dom';

function LoginLayout() {

  return (
    <div className="login-layout">
        <Outlet />
    </div>
  )
}

export default LoginLayout;