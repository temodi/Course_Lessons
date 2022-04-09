import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import ContactUs from './components/ContactuUs';
import AboutScreen from './screens/AboutScreen';

/*
 Route eseten linkesek;
 
 <a href="..">   - hagyonmanyos link, elküldi a servernek az url-t, és "újra tolti" az oldalt 
 <Link to="..."> - sima link, nem kuldi el a servernek, nincs oldal ujratoltes
 <NavLink to="..." - navigacios link, nem kuldi el a servernek, nincs oldal ujratoltes, az akitv linket vagyis ha az utvanal match-el, 'active' class-al latja el
*/
function App() {
  return (
    <div className="App">
      {/* Minden oldalon legyen ez a navgiaci*/}      
      Header
      <ul>
        <li><Link to="/">Fő oldal</Link></li>
        <li><a href="/about">Rolunk</a></li>
        <li><NavLink to="/news" >Hirek</NavLink></li>
        <li><NavLink to="/contactus" className={ ({ isActive }) => isActive ? 'red': 'blue' }>Kapcsolat</NavLink></li>
        <li><Link to="/ASZF.pdf">ASZF</Link></li>
      </ul>
      <Routes>
        {/* Basic routing */}
        <Route path="/" element={ <div>Ez a fo oldal</div> } />
        <Route path="/about" element={<AboutScreen /> } />
        <Route path="/news" element={ <div>Hirek</div> } />
        <Route path="/contactus" element={ <ContactUs /> } />
        <Route path="/ASZF.pdf" element={ <div>Nincs asszf</div>} />
      </Routes>
      <br />
      ASZF letoltese: <a href="/ASZF.pdf" target="_blank">Letoltes</a>
      Footer
    </div>
  );
}

export default App;
