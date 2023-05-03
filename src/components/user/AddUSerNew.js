import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserNew = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const onChangeWebsite = (event) => {
    setWebsite(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name) {
      //error msg
      return;
    }
    const user = {
      name: name,
      username: username,
      phone: phone,
      email: email,
      website: website,
    };
    await axios.post("http://localhost:5000/users", user);
    navigate({ pathname: "/" });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the fullname"
              name="name"
              value={name}
              onChange={(event) => onChangeName(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the username"
              name="username"
              value={username}
              onChange={(event) => onChangeUsername(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter the email"
              name="email"
              value={email}
              onChange={(event) => onChangeEmail(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(event) => onChangePhone(event)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onChangeWebsite(event)}
            />
          </div>
          <button type="submit" className="btn btn-info text-white col-12">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserNew;
