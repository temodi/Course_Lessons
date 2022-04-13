import { Routes, Route  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
 
import AboutScreen from './views/AboutScreen';
import ProficiencyScreen from './views/ProficiencyScreen';
import ReferenceScreen from './views/ReferenceScreen';
import BlogScreen from './views/BlogScreen';

import Stack from './components/proficiency/Stack';
import Reference from './components/reference/Reference';
import BlogPost from './components/blog/BlogPost';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';

import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import ProfileLayout from './layouts/ProfileLayout';

import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        console.log('user', user)
        if (user) {
          // Felhasznalo bevan lepve
          setUserLogged(true)
        } else {
          // nincs belepve
          setUserLogged(false)
        }
    })

  }, [])

  return (
    <div className="App">
      <Routes>
        <Route element={ <MainLayout /> }>
          <Route path='/' element={ <AboutScreen /> }/>
          <Route path='/about' element={ <AboutScreen /> }/>
          <Route path='/proficiency' element={ <ProficiencyScreen /> }/>
          <Route path='/proficiency/:stack_id' element={ <Stack /> }/>
          <Route path='/reference' element={ <ReferenceScreen /> }/>
          <Route path='/reference/:reference_id' element={ <Reference /> }/>
          <Route path='/blogposts' element={ <BlogScreen /> }/>
          <Route path='/blogposts/:blog_id' element={ <BlogPost /> }/>
        </Route>
        
        <Route element={ <LoginLayout /> } >
          <Route path="/login" element={ <Login /> } />
          <Route path="/passwordreset" element={ <PasswordReset /> } />
        </Route>

        <Route element={ <ProfileLayout userLogged={ userLogged } />}>
          <Route path="/profile" element={ <div>Profile </div> } />
          <Route path="/new-post" element={ <div>New post</div> } />
          <Route path="/logout" element={ <div>Logout </div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
