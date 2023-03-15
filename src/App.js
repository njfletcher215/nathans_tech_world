import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';

import Landing from './pages/Landing';
import Home from './pages/Home';
import SoftwareTutorials from './pages/SoftwareTutorials';
import HardwareTutorials from './pages/HardwareTutorials';
import Schematics from './pages/Schematics';
import CoolTech from './pages/CoolTech';
import Games from './pages/Games';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/software-tutorials' element={<SoftwareTutorials />} />
            <Route path='/hardware-tutorials' element={<HardwareTutorials />} />
            <Route path='/schematics' element={<Schematics />} />
            <Route path='/cool-tech' element={<CoolTech />} />
            <Route path='/games' element={<Games />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
