import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, NavLink, useLocation, Navigate } from 'react-router-dom';
import ContactUs from './components/ContactuUs';
import AboutScreen from './screens/AboutScreen';
import Blog from './screens/Blog';
import BlogPost from './components/BlogPost';
import Knowledge from './components/Knowledge';
import KnowledgeDetails from './components/KnowledgeDetails';

/*
 Route eseten linkesek;
 
 <a href="..">   - hagyonmanyos link, elküldi a servernek az url-t, és "újra tolti" az oldalt 
 <Link to="..."> - sima link, nem kuldi el a servernek, nincs oldal ujratoltes
 <NavLink to="..." - navigacios link, nem kuldi el a servernek, nincs oldal ujratoltes, az akitv linket vagyis ha az utvanal match-el, 'active' class-al latja el
*/
function App() {
  const location = useLocation();
 
  console.log('location', location)
/*   
  const enableLayout = () => {
    if (location.pathname === '/' || location.pathname === '/about') {
      return true;
    }
    return false;
  } */

  return (
    <div className="App">
      {/* Minden oldalon legyen ez a navgiaci*/}      
      <>Header
      <ul>
        <li><Link to="/">Fő oldal</Link></li>
        <li><a href="/about">Rolunk</a></li>
        <li><NavLink to="/news" >Hirek</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/jobs" >Allas</NavLink></li>
        <li><NavLink to="/knowledge">Tudas</NavLink></li>
        <li><NavLink to="/contactus" className={ ({ isActive }) => isActive ? 'red': 'blue' }>Kapcsolat</NavLink></li>
        <li><Link to="/ASZF.pdf">ASZF</Link></li>
      </ul>
      </>
      <Routes>
        {/* Basic routing */}
        <Route path="/" element={ <div>Ez a fo oldal</div> } />
        <Route path="/about" element={<AboutScreen /> } />
        <Route path="/news" element={ <div>Hirek</div> } />
        <Route path="/jobs" element={ <div>Allashirdetesek</div> } />
        <Route path="/knowledge" element={ <Knowledge /> } />
        <Route path="/knowledge/:id" element={ <KnowledgeDetails /> } />
        
        <Route path="/contactus" element={ <ContactUs /> } />
        <Route path="/ASZF.pdf" element={ <div>Nincs asszf</div>} />

        { /* Dinamikus routing / parameterezheto routing */ }
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/blog/:blog_id" element={ <BlogPost /> } />


        { /* Utvonal atiranyitasa */ }
        <Route path="/job" element={ <Navigate to="/jobs" /> } />

        { /* wildcard karakter: * */}
        { /* http status 404 hozz hasonloan, hogy nincs tartalom adott utvonalon */ }
        <Route path="*" element={ <div> Ez a cimen nincs tartalom </div> } />
      </Routes>
      <br />
      ASZF letoltese: <a href="/ASZF.pdf" target="_blank">Letoltes</a>
      Footer
    </div>
  );
}

export default App;
