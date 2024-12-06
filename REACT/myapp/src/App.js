import React from 'react';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import Errorfile from './pages/Errorfile';

function App({props}) {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Errorfile />} />
    </Routes>
  );
}

export default App;
