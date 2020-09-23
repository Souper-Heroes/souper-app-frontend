
import React from 'react';
import Navbar from './components/layout/Navbar';
import SouperFooter from './components/layout/SouperFooter';
import LoginPage from "./components/Login/LoginPage";
import './App.css';


function App() {
  return (
    //<LoginPage />
    <div className="App">
      <Navbar />
      <SouperFooter />
    </div>
  );
}

export default App;
