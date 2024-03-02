import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
// import { render } from "@testing-library/react";
import { connect } from 'react-redux';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Login from './routes/Login';
import System from './routes/System';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <span className="content-container">
          <Routes>
            <Route path="/" element={<Layout />} exact />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/System" element={<System />} />
            {/* <Route path={path.HOME} exact component={(Home)} />
          <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={path.SYSTEM} component={userIsAuthenticated(System)} /> */}
          </Routes>
        </span>
        {/* <ToastContainer
          className="toast-container"
          toastClassName="toast-item"
          bodyClassName="toast-item-body"
          autoClose={false}
          hideProgressBar={true}
          pauseOnHover={false}
          pauseOnFocusLoss={true}
          closeOnClick={false}
          draggable={false}
          closeButton={<CustomToastCloseButton />}
        /> */}
      </BrowserRouter>
    )
  }
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


