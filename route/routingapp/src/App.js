import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import About from './About';

import { useState, useEffect } from 'react';


import { 
  BrowserRouter as Router, 
  Route,
   Link 
  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <h1> Wowow wow wow</h1>
    <Contact />
    <About />
    </div>
  );
}

export default App;
