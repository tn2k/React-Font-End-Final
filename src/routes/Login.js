import React from "react";
import "./Login.scss";
import backgoundlogin from "../assets/images/backgoundlogin.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="child-login">
        <div className="image-destop col-7">
          <img src={backgoundlogin} />
        </div>
        <div className="input-login col-5">
          <div className="title-login"> Login to Your Account </div>
          <div className="input-email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-name">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-password">
            <input type="password" placeholder="Password" />
          </div>
          <div className="forget-password"> Forget Password ? </div>
          <button className="button-login">Login</button>
          <div className="create-new"> Create your new account ?</div>
          <div className="list-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-google-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
