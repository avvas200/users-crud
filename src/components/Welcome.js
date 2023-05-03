import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = { name: "Harry Poter", age: 39 };
  }
  changeData() {
    this.setState({
      name: "Graham Uwarey",
      age: 20,
    });
  }
  render() {
    return (
      <div>
        <h2>
          Name is {this.state.name} and age is {this.state.age}
        </h2>
        <button onClick={() => this.changeData()}>Change State</button>
      </div>
    );
  }
}
export default Welcome;
