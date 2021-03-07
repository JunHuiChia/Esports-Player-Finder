import React from 'react';

// import './App.css';
import "./css/tailwind.css"


import Header from './components/header/header.js'
// import Header from './components/header/header.js'
import { AppProvider } from "./contexts/AppContext"
import AuthContainer from "./components/auth/AuthContainer"

function App() {
  return (
    <AppProvider>
        <AuthContainer>
            <Header/>
        </AuthContainer>
    </AppProvider>
  );
}

export default App;
