import React, { useEffect, useState } from "react";
import Navbar from "./cmmons/Navbar";
import Footer from "./cmmons/Footer";
import '../index.css'
import Auth from "./Auth/Login";



const Home = () => {
    const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme: 'light');
  useEffect(() => {
    localStorage.setItem('current_theme',theme)
  },[theme])

  return (
    <div>
     
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
       
    </div>
    
    </div>
  );
};

export default Home;
