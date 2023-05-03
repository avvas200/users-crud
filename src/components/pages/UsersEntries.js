import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function UsersEntries() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers();
    console.log(users);
  }, []);

  const getAllUsers = () => {
    axios
      .get("https://api.publicapis.org/entries")
      .then(function (response) {
        setUsers(response.data);
      }) //do sth if data is fetch successfully
      .catch(function (error) {
        console.log(error);
      }); // do sth if there is an error
  };

  return (
    <div className="container">
      <div>
        <h2 className="py-3"> User Management System</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {users["entries"].map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UsersEntries;
