import { useState, createContext, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const AuthContext = createContext();
 
function App() {
  const [user, setUser] = useState(null);

  console.log('user', user)
  return (
  <BrowserRouter>
    { /* 
      {
        'user': user,
        'setUser: setUser
      }
      {
        user: user,
        setUser: setUser,
      }
    */ }
    <AuthContext.Provider value={ { user, setUser } }>
      <div className="App">
          <div>
            <Link to="/">Main page</Link>
            <Link to="/protected">Vedett oldal</Link>
            <Link to="/profiles">Profiles</Link>
          </div>
        <Routes>
          <Route path="/" element={ <div>Main page</div> } />
          <Route path="/protected" element={
            <AuthProtected>
              <div>Protected</div>
            </AuthProtected>
          } />
          <Route path="/profiles" element={
            <AuthProtected>
              <div>Profile lista</div>
            </AuthProtected>
          } />
        </Routes>
      </div>
    </AuthContext.Provider>
  </BrowserRouter>
  )
}

// Auth. logikat
// ha a felhasznalo bevan lepve, akkor megjelenhet a children
// ha nincs belepve, akkor login components jeleitek meg neki
function AuthProtected(props) {
  const authContext = useContext(AuthContext);

  if (authContext.user === null) {
    // bekell leptetni vagz bekerni a belepest
    return <Login />
  } else {
    return <div>AuthProtected: { props.children }</div>
  }
}

function Login() {
  const authContext = useContext(AuthContext);

  const onClickHandler = (event) => {
    authContext.setUser({
      username: 'hello',
      id: 4513,
    })
  }
  return <div>
    <button type="button" onClick={ onClickHandler }>Login</button>
  </div>
}

export default App;