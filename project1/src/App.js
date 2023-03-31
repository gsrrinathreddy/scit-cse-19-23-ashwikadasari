import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';

import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
import './App.css';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <INavbar/>
      <Routes>
        <Route path="Aboutme" element={<Aboutme/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Skills" element={<Skills/>}/> 
        <Route path="Qualification" element={<Qualification/>}/> 
          <Route path="Experience" element={<Experience/>}/> 
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
