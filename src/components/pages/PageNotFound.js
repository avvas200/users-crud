import React from "react";
import { Button } from "react-bootstrap";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="hide-navbar">
      <h2>Page Not Found</h2>
      <button className="btn btn-primary">primary button</button>
      <Button className="m-2">Primary Button</Button>
      <a href="/">Home</a>
    </div>
  );
}

export default PageNotFound;
