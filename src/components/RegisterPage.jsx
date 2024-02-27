import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
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
    if (!formData.username) {
      newError.username = "*Username is required";
      isValid = false;
    }
    if (!formData.name) {
      newError.name = "*Name is required";
    }
    if (!formData.email) {
      newError.email = "*Email is required";
      isValid = false;
    } else if (!validator.isEmail(formData.email)) {
      newError.email = "*Invalid Email";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (validateForm()) {
      console.log("Form Data:", formData);
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
            Registration Successful!!!
            <p>
              <Link to="/login">Click here </Link> to Login
            </p>
          </div>
        ) : (
          <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  value={formData.name}
                  name="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
                {error.name && <p className="error">{error.name}</p>}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  value={formData.username}
                  name="username"
                  placeholder="Username"
                  onChange={handleInputChange}
                />
                {error.username && <p className="error">{error.username}</p>}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  value={formData.email}
                  name="email"
                  placeholder="Email"
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
                Register
              </button>
              <div className="register-link">
                <p>
                  Already have an account? <Link to="/login">Login Here</Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
