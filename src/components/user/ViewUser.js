import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function ViewUser(props) {
  const { userId } = useParams();
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(response.data);
  };

  return (
    <div className="container">
      <Link to="/" className="btn btn-outline-info m-3">
        Back
      </Link>
      <ListGroup className="w-75 m-4">
        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
        <ListGroup.Item>Username: {user.username}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
        <ListGroup.Item>Website: {user.website}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ViewUser;
