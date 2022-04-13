import { Routes, Route, Link, NavLink, useLocation, Navigate, Outlet } from 'react-router-dom';
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

import LoginLayout from './layouts/LoginLayout';
import MainLayout from './layouts/MainLayout';
import SalesLayout from './layouts/SalesLayout';

function App() {
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

                <Route element={ <LoginLayout /> }>
                  <Route path="/login" element={ <div>Ide kerul a login form</div> } />
                  <Route path="/passwordreset" element={ <div>Jelszo ujra</div> } />
                </Route>
                
                <Route element={ <SalesLayout /> }>
                  <Route path="/sales-page-1" element={ <div>Sales page 1</div>} />
                  <Route path="/sales-page-2" element={ <div>Sales page 2</div>} />
                </Route>

                {/* <Route path="/natur-about" element={ 
                  <>
                    <div className="natur-menu">Menu 1</div>
                    <div>Natur about</div>
                    <footer>Footer</footer>
                  </>
                } />
                <Route path="/natur-proficiency" element={ 
                  <>
                    <div className="natur-menu">Menu 1</div>
                    <div>Natur proficiency</div>
                    <footer>Footer</footer>
                  </>
                } />
                <Route path="/natur-blog" element={ 
                  <>
                    <div className="natur-menu">Menu 1</div>
                    <div>Natur blog</div>
                    <footer>Footer</footer>
                  </>
                } /> */}

                <Route element={
                    <>
                    <div className="nature-menu">Menu 1</div>
                    <Outlet />
                    <footer>Footer</footer>
                  </>
                } >
                    <Route path="/natur-about" element={ <div>Natur about</div> } />
                    <Route path="/natur-proficiency" element={ <div>Natur proficiency</div> } />
                    <Route path="/natur-blog" element={ <div>Natur blog</div> } />
                </Route>

                {/* <Route path='/prices' element={ <PricesScreen /> }/>
                <Route path='/contact' element={ <ContactScreen /> }/>
                <Route path='/registration' element={ <RegistrationScreen /> }/>
                <Route path='/signin' element={ <SignInScreen /> }/> */}
            </Routes>
    </div>
  );
}

export default App;
