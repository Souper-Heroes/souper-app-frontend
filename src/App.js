import React from "react";
import Navbar from "./components/layout/Navbar";
import SouperFooter from "./components/layout/SouperFooter";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
    //<LoginPage />
    //<LandingPage />
    //<div className="App">
    //  <Navbar />
    //  <SouperFooter />
    //</div>
  );
}

export default App;
