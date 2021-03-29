import React from 'react';
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'

// import './App.css';
import "./css/tailwind.css"
import "./components/colour.css";


import Header from './components/header/header.js'

import { AppProvider } from "./contexts/AppContext"

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 3500,
  offset: '70px',
  type: types.INFO,
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AppProvider>
          <Header/>
      </AppProvider>
    </AlertProvider>
  );
}

export default App;
