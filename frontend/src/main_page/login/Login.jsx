import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
  
    const handleError = (err) =>
      toast.error(err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:3002/login",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        const { success, message } = data;
        if (success) {
          handleSuccess("Login successful!");
          setTimeout(() => {
            window.location.href = "http://localhost:3001/";
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
      });
    };
  
    return (
      <div className="form_container mt-5">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
      </div>
    );
};
  
export default Login;