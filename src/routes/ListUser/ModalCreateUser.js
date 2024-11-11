import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createNewUser } from "../../services/apiService";
import "./ModalCreateUser.scss";

const ModalCreateUser = ({ show, setShow, fetchAllUser }) => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setNumber] = useState("");
  const [role, setRole] = useState("User");
  const [sex, setSex] = useState("");
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setPassword("");
    setNumber("");
    setRole("tenant");
    setSex("");
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
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      password.length > 4
    );
  };

  const handleSubmitCreateUser = async () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    if (!isValidEmail) {
      toast.error("email not exits");
      return;
    } else if (!isValidPassword) {
      toast.error("invalid password !");
      setShowErrorPassword(true);
      return;
    } else {
      await createNewUser(
        first_name,
        last_name,
        email,
        password,
        phonenumber,
        sex,
        role
      );
      handleClose();
      fetchAllUser();
      toast.success("Create a new user success!");
    }
  };

  return (
    <>
      <Button className="add-new-user" variant="primary" onClick={handleShow}>
        Add new User
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
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
                value={first_name}
                onChange={(event) => setFirst_name(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="last name"
                value={last_name}
                onChange={(event) => setLast_name(event.target.value)}
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
            {showErrorPassword && (
              <div className="col-md-12 error-password">
                Password needs min 1 uppercase, 1 lowercase, 1 number , be
                longer than 4 characters.
              </div>
            )}
            <div className="col-4">
              <label className="form-label">Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="0123......"
                value={phonenumber}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div className="col-4">
              <label className="form-label"> Role</label>
              <select
                id="inputrole"
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="User">User</option>
                <option value="Tenant">Tenant</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Sex</label>
              <select
                id="inputsex"
                className="form-select"
                onChange={(event) => setSex(event.target.value)}
                placeholder="Choose..."
              >
                <option value=""> Choose...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="close_submit">
              <Button variant="secondary" onClick={handleClose}>
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

export default ModalCreateUser;
