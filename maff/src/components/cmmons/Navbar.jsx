import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/day.png";
import toggle_dark from "../../assets/night.png";
import avatar_light from "../../assets/avatar-white.png";
import avatar_dark from "../../assets/avatar-dark.png";
import { CiLogin, CiLogout, CiShoppingCart, CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ theme, setTheme }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.userId;

          const response = await axios.post(
            "http://localhost:3900/api/getSingleUser",
            { userId }
          );
          setUser(response.data.user);
          setIsLoggedIn(true);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <div className={`navbar ${theme}-theme`}>
      <div className="logo">ElMuff</div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Pre-Order</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <img
          onClick={toggleSearch}
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="search icon"
        />
        <input
          type="text"
          placeholder="search"
          className={searchVisible ? "visible" : ""}
        />
      </div>
      <img
        onClick={toggleMode}
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
              {isLoggedIn ? (
                <>
                  <Link to="/profile">
                    <li>
                      <CgProfile className="icon" />
                      Profile
                    </li>
                  </Link>
                  <Link to="/cart">
                    <li>
                      <CiShoppingCart className="icon" />
                      Cart
                    </li>
                  </Link>
                  <Link to="/settings">
                    <li>
                      <CiSettings className="icon" />
                      Settings
                    </li>
                  </Link>
                  <li onClick={handleLogout}>
                    <CiLogout className="icon" />
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <li>
                      <CiLogin className="icon" />
                      Register
                    </li>
                  </Link>
                  <Link to="/login">
                    <li>
                      <CiLogin className="icon" />
                      Login
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
      {isLoggedIn && (
        <p>
          {" "}
          {user?.nom} {user?.prenom}
        </p>
      )}
    </div>
  );
};

export default Navbar;
