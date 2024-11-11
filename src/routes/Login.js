import React, { useState, useEffect } from "react";
import "./Login.scss";
import { toast } from "react-toastify";
import { loginUser, checkAuth } from "../services/apiService";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await checkAuth();
        if (response) {
          navigate('/');
        }
      } catch (error) {
        navigate('/login');
      }
    };
    checkAuthentication();
  }, [navigate]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleCleanData = () => {
    setEmail("");
    setPassword("");
  };

  const handleLoginUser = async () => {
    try {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        toast.error("email not exits");
        return
      }
      const data = await loginUser(email, password);
      const statusCode = await data?.statusCode
      if (statusCode === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        handleCleanData();
        toast.success("Login user success!");
        navigate('/');
        return;
      }
    } catch (error) {
      toast.error("Login user fail! .Please check email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="child-login">
        <div className="image-destop col-7">
          <img src="https://res.cloudinary.com/driamsklu/image/upload/v1730945101/image/sd1ninnbcs7zp2dly69x.png" alt="Login background " />
        </div>
        <div className="input-login col-5">
          <div className="title-login"> Login to Your Account </div>
          <div className="input-email">
            <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-password">
            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="forget-password"> Forget Password ? </div>
          <button className="button-login" onClick={() => handleLoginUser()}>Login</button>
          <div className="create-new"  > Create your new account ?</div>
          <div className="list-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google-plus"></i>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
