import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Landing from './pages/Landing';
import Home from './pages/Home';
import SoftwareTutorials from './pages/SoftwareTutorials';
import HardwareTutorials from './pages/HardwareTutorials';
import Schematics from './pages/Schematics';
import CoolTech from './pages/CoolTech';
import Games from './pages/Games';
import LogBook from './pages/LogBook';
import Article from './pages/Article';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['visitCount']);

  setCookie('visitCount', 0, {path: '/#/home'});

  return (
    <div className="page-container">
      <CookiesProvider>
        <Header />
        <div className="page-content-container">
          <Router>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/software-tutorials' element={<SoftwareTutorials />} />
                <Route path='/hardware-tutorials' element={<HardwareTutorials />} />
                <Route path='/schematics' element={<Schematics />} />
                <Route path='/cool-tech' element={<CoolTech />} />
                <Route path='/games' element={<Games />} />
                <Route path='/log-book' element={<LogBook />} />
                <Route path='/article/:id' element={<Article />} />
            </Routes>
          </Router>
        </div>
      </CookiesProvider>
    </div>
  );
}

export default App;
