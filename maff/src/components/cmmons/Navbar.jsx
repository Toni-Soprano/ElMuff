import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/day.png";
import toggle_dark from "../../assets/night.png";
import avatar_light from "../../assets/avatar-white.png";
import avatar_dark from "../../assets/avatar-dark.png";

const Navbar = ({ theme, setTheme }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={`navbar ${theme}-theme`}>
      <div className="logo">ElMuff</div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Pre-Order</li>
        <li>Contact</li> {/* Corrected duplicate 'Pre-Order' */}
      </ul>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="search icon"
        />
      </div>
      <img
        onClick={toggle_mode}
        src={theme === "light" ? toggle_dark : toggle_light}
        alt="toggle icon"
        className="toggle-icon"
      />
      <div className="avatar-container" onClick={toggleDropdown}>
        <img
          src={theme === "light" ? avatar_dark : avatar_light}
          alt="avatar"
          className="avatar"
        />
        {isDropdownVisible && (
          <div className="dropdown">
            <ul>
              <li>Profile</li>
              <li>Card</li>
              <li>Settings</li>
             <Link smooth  to="/login"> <li>Login</li></Link> 
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
