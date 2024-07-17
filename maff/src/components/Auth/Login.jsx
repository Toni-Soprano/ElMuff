import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
 

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3900/api/Login", {
        email,
        password,
      });

      if (response.data.msg === "Utilisateur non trouvé") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Utilisateur non trouvé",
        });
        return;
      }
      if (response.data.msg === "Mot de passe incorrect") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Mot de passe incorrect",
        });
        return;
      }
      if (!response.data.msg === "ok") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Mot de passe incorrect",
        });
        return;
      }

      if (response.data.msg === "ok") {
        const token = response.data.token;
        console.log("Token:", token);
        localStorage.setItem("token", token);

        navigate("/home");
        Swal.fire({
          title: "Welcome!",
          text: "User logged in",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Network error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server. Please try again later.",
      });
    }
  };
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
  return (
    <div className="body">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="inputBox">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link>Forget password</Link>
            <Link to="/register">Signup</Link>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Auth;
