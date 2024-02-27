import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
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
    </div>
  );
};

export default Nav;
