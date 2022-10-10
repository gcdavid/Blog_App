import React, { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AppAxios } from "../services/Axios";
import toast from "react-hot-toast";

const Register = () => {
  const [inputs, setInputs] = useState<Register.RegisterInfo>({
    username: "",
    email: "",
    password: "",
  });
  const navigate: NavigateFunction = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await AppAxios.post("/auth/register", inputs);
      toast.success(res.data);
      navigate("/");
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          required
          name="username"
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <label htmlFor="Password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
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
