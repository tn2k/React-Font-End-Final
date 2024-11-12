import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import "./App.scss";

// import { render } from "@testing-library/react";
import Layout from "./routes/LayoutPage/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import System from "./routes/System";
import ListUser from "./routes/ListUser/ListUser";
import HomeAdmin from "./routes/admin/HomeAdmin";
import DetailProduct from "./routes/DetailProduct/ProductById";
import PageHowWorks from "./routes/PageHowWorks/PageHowWorks";
import ModalCreateProduct from "../src/routes/CreateProduct/ModalCreateProduct"
import Account from "../src/routes/Account/Account"
import Overview from "../src/routes/Account/Overview"
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
          <Route path="/detailProduct" element={<DetailProduct />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/how-works" element={<PageHowWorks />} />
          <Route path="/create-product" element={<ModalCreateProduct />} />
          <Route path="/account" element={<Account />} />
          <Route path="/overview" element={<Overview />} />
          {/* <Route path={path.HOME} exact component={(Home)} />
          <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={path.SYSTEM} component={userIsAuthenticated(System)} /> */}
        </Routes>
      </span>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
      {/* Same as */}
      <ToastContainer />
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
