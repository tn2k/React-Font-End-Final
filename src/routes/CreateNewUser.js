import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";


import { createNewUser } from "../services/apiService";
import "./CreateNewUser.scss"

const CreateNewUser = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setNumber] = useState("");
  const [Role, setRole] = useState("User");
  const [gender, setgender] = useState("");
  const [show, setShow] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const handleClose = () => {
    setShow(false);
    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
    setNumber("");
    setRole("User");
    setgender("");
  };
  const handleShow = () => setShow(true);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      password.length > 4;
  }

  const handleSubmitCreateUser = async () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    if (!isValidEmail) {
      toast.error('email not exits')
      return;
    }
    else if (!isValidPassword) {
      toast.error('invalid password !')
      setShowErrorPassword(true)
      return;
    }
    else {


      let res = await createNewUser(firstName, lastName, email, password, phonenumber, gender, Role);
      handleClose();
      toast.success('Create a new user success!')
    }
  };

  return (
    <>
      <Button className="add-new-user" variant="primary" onClick={handleShow}>
        Add new User
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new use</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="first name"
                value={firstName}
                onChange={(event) => setfirstName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="last name"
                value={lastName}
                onChange={(event) => setlastName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@gmail.com..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password..."
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {showErrorPassword &&
              <div className="col-md-12 error-password">Password needs min 1 uppercase, 1 lowercase, 1 number , be longer than 4 characters.</div>
            }
            <div className="col-4">
              <label className="form-label">Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="0123......"
                value={phonenumber}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div className="col-4">
              <label className="form-label"> Role</label>
              <select
                id="inputRole"
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Tenant">Tenant</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Sex</label>
              <select
                id="inputgender"
                className="form-select"
                onChange={(event) => setgender(event.target.value)}
                placeholder="Choose..."
              >
                <option value=""> Choose...</option>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* <div className="col-md-12 ml-auto">
              <label htmlFor="inputZip" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="inputZip"
                value={Image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div className="col-md-12 show-image" htmlFor="inputZip">
              <img />
            </div> */}
            <div className="close_submit">
              <Button
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleSubmitCreateUser()}
              >
                Đăng kí
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateNewUser;
