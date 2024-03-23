import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "./App.scss";

// import { render } from "@testing-library/react";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import System from "./routes/System";
import ListUser from "./routes/ListUser";

const App = () => {
  return (
    <BrowserRouter>
      <span className="content-container">
        <Routes>
          <Route path="/" element={<Layout />} exact />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/System" element={<System />} />
          <Route path="/listUser" element={<ListUser />} />

          {/* <Route path={path.HOME} exact component={(Home)} />
          <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={path.SYSTEM} component={userIsAuthenticated(System)} /> */}
        </Routes>
      </span>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    // started: state.app.started,
    // isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
