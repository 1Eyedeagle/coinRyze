import React from "react";
import "../assets/css/loginpage.css"; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="logo">
          Coin<span className="ryze">Ryze</span>
        </h1>
        <h2 className="tagline">
          Quick Start Your <br /> Professional Data Analysis
        </h2>
        <button className="login-button">Login</button>
        <p className="or">Or</p>
        <button className="register-button">Register</button>
        <p className="footer-text">
          By accessing the website, you confirm that you are at least 18 years
          old and agree to the terms of use.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
