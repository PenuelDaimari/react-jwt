import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <header>
        <h1>REACT</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <div className="home">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
    </div>
  );
};

export default HomePage;
