import { Routes, Route, Link, NavLink, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import AboutScreen from './views/AboutScreen';
import ProficiencyScreen from './views/ProficiencyScreen';
import ReferenceScreen from './views/ReferenceScreen';
import BlogScreen from './views/BlogScreen';

import Stack from './components/proficiency/Stack';
import Reference from './components/reference/Reference';
import BlogPost from './components/blog/BlogPost';

function App() {
  return (
    <div className="App">
            <Navbar />

            <Routes>
                <Route path='/' element={ <AboutScreen /> }/>
                <Route path='/about' element={ <AboutScreen /> }/>
                <Route path='/proficiency' element={ <ProficiencyScreen /> }/>
                <Route path='/proficiency/:stack_id' element={ <Stack /> }/>
                <Route path='/reference' element={ <ReferenceScreen /> }/>
                <Route path='/reference/:reference_id' element={ <Reference /> }/>
                <Route path='/blogposts' element={ <BlogScreen /> }/>
                <Route path='/blogposts/:blog_id' element={ <BlogPost /> }/>
                {/* <Route path='/prices' element={ <PricesScreen /> }/>
                <Route path='/contact' element={ <ContactScreen /> }/>
                <Route path='/registration' element={ <RegistrationScreen /> }/>
                <Route path='/signin' element={ <SignInScreen /> }/> */}
            </Routes>
    </div>
  );
}

export default App;
