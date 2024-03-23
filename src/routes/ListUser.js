import React, { useState } from "react";
import axios from "axios";

import "./ListUser.scss";
import CreateNewUser from "./CreateNewUser";

const ListUser = () => {
  let data = axios.get("http://localhost:8081");
  console.log("check user ", User);
  return (
    <div className="container mt-3">
      <h2>List User</h2>
      <CreateNewUser />

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Role</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {/* {User &&
            User.leghth > 0 && */}
          {User.map((User, index) => (
            <tr key={index}>
              <td>{User.Firstname}</td>
              <td>{User.LastName}</td>
              <td>{User.Email}</td>
              <td>{User.Number}</td>
              <td>{User.Role}</td>
              <td>{User.Sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
