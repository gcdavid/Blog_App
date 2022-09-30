import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <label htmlFor="Email">Username</label>
        <input placeholder="Enter your username" />
        <label htmlFor="Password">Password</label>
        <input placeholder="Enter your password" />
        <button>Login</button>
        <span>
          Don't have an account?
          <Link to="/Register" className="link">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
