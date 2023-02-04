import React from 'react';
import Navbar from './components/Navbar.js';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
    </>
  );
}

export default App;
