import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input required type="text" placeholder="Enter your username" />
        <label htmlFor="Email">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="Enter your password" />
        <button>Register</button>
        <span>
          Do you have an account?
          <Link to="/Register" className="link">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
