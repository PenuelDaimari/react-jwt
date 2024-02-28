import axios from 'axios';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newError = {};
    let isValid = true;
    if (!formData.email) {
      newError.email = "*email is required";
      isValid = false;
    }
    if (!formData.password) {
      newError.password = "*Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newError.password = "*Password must be at least 8 characters";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data:", formData);
        const response = await axios.post(`http://localhost:3000/login'}`, formData);
      setSubmitted(true);
    } else {
      //
    }
  };
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
      <div className="wrapper">
        {submitted ? (
          <div className="success">
            Login Successful!!!
            <p>
              <Link to="/">Click here</Link> to go to Home Page
            </p>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  value={formData.email}
                  name="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
                {error.email && <p className="error">{error.email}</p>}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
                {error.password && <p className="error">{error.password}</p>}
              </div>

              <button type="submit" className="btn">
                Login
              </button>

              <div className="register-link">
                <p>
                  Dont have an account?{" "}
                  <Link to="/register">Register Here</Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
