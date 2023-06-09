import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const [user, setUser] = useState(initialState);

  const { name, username, email, phone, website } = user;

  const onChangeInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    setUser(response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.name) {
      //error msg
      return;
    }
    await axios.put(`http://localhost:5000/users/${userId}`, user);
    navigate({ pathname: "/" });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the fullname"
              name="name"
              value={name}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the username"
              name="username"
              value={username}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter the email"
              name="email"
              value={email}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <button type="submit" className="btn btn-info text-white col-12">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
