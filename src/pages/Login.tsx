import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AppAxios } from "../services/Axios";
import { AuthContext } from "../context/authContext";
import { IAuthContextType } from "../types/authContext";

const Login = () => {
  const [inputs, setInputs] = useState<LoginInfo.Login>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext) as IAuthContextType;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(inputs);
      toast.success("success");
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Username</label>
        <input
          placeholder="Enter your username"
          name="username"
          onChange={changeHandler}
        />
        <label htmlFor="Password">Password</label>
        <input
          placeholder="Enter your password"
          name="password"
          type="password"
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
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
