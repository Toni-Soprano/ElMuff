import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [username, setUsername] = useState("");
  const [prenom, setPrenom] = useState("");
  const [bd, setBd] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email,
        mdp,
        username,
        prenom,
        bd
      };

      const response = await axios.post(
        "http://localhost:3900/api/RegistreUser",
        formData
      );

      console.log('Response data:', response.data); // Debugging line

      if (response.data.msg === "ok") {
        Swal.fire({
          title: "Good job!",
          text: "User registered",
          icon: "success",
        });
        console.log("Signup successful");
      
        console.log("Navigating to /home"); // Log before navigate
        navigate("/home");
      } else if (response.data.msg === "400") {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "User already exists with this email!",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const testNavigate = () => {
    console.log("Test navigating to /home");
    navigate("/home");
  };

  return (
    <div className="body-register">
      <div className="box-register">
        <span className="borderLine-register"></span>
        <form onSubmit={handleSubmit}>
          <h2> Sign Up </h2>
          <div className="inputBox-register">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox-register">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>First name</span>
            <i></i>
          </div>
          <div className="inputBox-register">
            <input
              type="text"
              required
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <span>Last name</span>
            <i></i>
          </div>
         
          <div className="inputBox-register">
            <input
              type="date"
              required
              value={bd}
              onChange={(e) => setBd(e.target.value)}
            />
            <span>Birthday</span>
            <i></i>
          </div>
          <div className="inputBox-register">
            <input
              type="password"
              required
              value={mdp}
              onChange={(e) => setMdp(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links-register">
            <Link to="/login"> Already a legend? Sign in!</Link>
          </div>
          <input type="submit" value="Register" />
        </form>
     
      </div>
    </div>
  );
};

export default Register;
