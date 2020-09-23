import React from "react";
import Navbar from "./components/layout/Navbar";
import SouperFooter from "./components/layout/SouperFooter";
import LoginPage from "./components/Login/LoginPage";
//import RegisterPage from "./components/Register/RegisterPage";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    //<LoginPage />
    //<RegisterPage />
    <div className="App">
      <Navbar />
      <SouperFooter />
    </div>
  );
}

export default App;
