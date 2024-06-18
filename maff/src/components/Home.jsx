import React, { useEffect, useState } from "react";
import Navbar from "./cmmons/Navbar";
import Footer from "./cmmons/Footer";
import "./home.css";
import Auth from "./Auth/Login";
import Carousel from "./Carousel";

const Home = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />

        <div className="banner">
          <h1> ElMuff</h1>
        </div>
        
        <div>
          <Carousel />
        </div>

        
      </div>
    </div>
  );
};

export default Home;
