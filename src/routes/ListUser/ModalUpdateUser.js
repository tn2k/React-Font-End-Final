import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { UpdateUser } from "../../services/apiService";
import "./ModalUpdateUser.scss";
import _ from "lodash";

const ModalUpdateUser = ({ show, setShow, fetchAllUser, dataUpdate }) => {
  const tenant_id = dataUpdate.tenant_id;
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [sex, setSex] = useState("");

  const handleClose = () => {
    setShow(false);
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setPhone("");
    setRole("tenant");
    setSex("");
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setFirst_name(dataUpdate.first_name);
      setLast_name(dataUpdate.last_name);
      setEmail(dataUpdate.email);
      setPhone(dataUpdate.phone);
      setRole(dataUpdate.role);
      setSex(dataUpdate.sex);
    }
  }, [dataUpdate]);

  const handleShow = () => setShow(true);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitUpdateUser = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("email not exits");
      return;
    } else {
      await UpdateUser(
        tenant_id,
        first_name,
        last_name,
        email,
        phone,
        sex,
        role
      );
      handleClose();
      fetchAllUser();
      toast.success("Update user success!");
    }
  };

  return (
    <>
      <Button className="add-new-user" variant="primary" onClick={handleShow}>
        Update User
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update use</Modal.Title>
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
                disabled
              />
            </div>
            <div className="col-md-6">
              <input
                disabled
                hidden
              />
            </div>
            <div className="col-4">
              <label className="form-label">Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="0123......"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="col-4">
              <label className="form-label"> Role</label>
              <select
                id="inputRole"
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="landlord">Landlord</option>
                <option value="tenant">Tenant</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Sex</label>
              <select
                id="inputsex"
                className="form-select"
                onChange={(event) => setSex(event.target.value)}
                value={sex}
              >
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
                onClick={() => handleSubmitUpdateUser()}
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

export default ModalUpdateUser;
