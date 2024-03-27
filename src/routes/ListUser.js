import React, { useState } from "react";
import { useEffect } from "react";
import "./ListUser.scss";
import CreateNewUser from "./CreateNewUser";
import { getAllUser } from "../services/apiService";
const ListUser = () => {
  const [AllUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      let response = await getAllUser();

      if (response.data.EC === 0) {
        setAllUsers(response.data.users);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  return (
    <div className="container mt-3">
      <h2>List User</h2>
      <CreateNewUser />
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Role</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {AllUsers && AllUsers.length > 0 ? (
            AllUsers.map((User, index) => (
              <tr key={index}>
                <td>{User.id}</td>
                <td>{User.firstName}</td>
                <td>{User.lastName}</td>
                <td>{User.email}</td>
                <td>{User.phonenumber}</td>
                <td>{User.roleId}</td>
                <td>{User.gender}</td>
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
