import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/header.js';
//import LoginPage from './HeaderProfile/header.js'

function App() {
  return (
    <Router>
      <Header/>
      
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
    </Router>
  );
}

export default App;
