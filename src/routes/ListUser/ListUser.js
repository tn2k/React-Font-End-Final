import React, { useState } from "react";
import { useEffect } from "react";
import "./ListUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import { getAllUser } from "../../services/apiService";


const ListUser = (props) => {
  const [showHandleCreateUser, setShowHandleCreateUser] = useState(false);
  const [showHandleUpdateUser, setShowHandleUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [AllUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      let response = await getAllUser();
      if (response.statusCode === 200) {
        setAllUsers(response.metadata.data);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleOnClickCreate = () => {
    setShowHandleCreateUser(true)
  }

  const handleOnClickUpdate = (user) => {
    setShowHandleUpdateUser(true)
    setDataUpdate(user)
  }

  return (
    <div className="container mt-3">
      <h2>List User</h2>
      <ModalCreateUser
        handleOnClickCreate={handleOnClickCreate}
        show={showHandleCreateUser}
        setShow={setShowHandleCreateUser}
        fetchAllUser={fetchAllUser}
      />
      <ModalUpdateUser
        fetchAllUser={fetchAllUser}
        handleOnClickUpdate={handleOnClickUpdate}
        show={showHandleUpdateUser}
        setShow={setShowHandleUpdateUser}
        dataUpdate={dataUpdate}
      />

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Sex</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {AllUsers && AllUsers.length > 0 ? (
            AllUsers.map((User, index) => (
              <tr key={index}>
                <td>{User.tenant_id}</td>
                <td>{User.first_name}</td>
                <td>{User.last_name}</td>
                <td>{User.email}</td>
                <td>{User.phone}</td>
                <td>{User.role}</td>
                <td>{User.sex}</td>
                <td className="btn-edit-user" onClick={() => handleOnClickUpdate(User)}><i className="fa-solid fa-pen-to-square"></i></td>
                <td className="btn-delete-user" ><i className="fa-solid fa-trash"></i></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
