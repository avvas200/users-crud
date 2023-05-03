import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      query: "",
      timeToReach: "",
    };
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangeQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onChangeTimeToReach = (event) => {
    this.setState({
      timeToReach: event.target.value,
    });
  };

  onSubmitEnquiry = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        User Registration Form
        <form onSubmit={this.onSubmitEnquiry}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />

            <label>Query</label>
            <textarea
              value={this.query}
              onChange={this.onChangeQuery}
            ></textarea>
            <label>Preferred Time to reach</label>
            <select
              value={this.timeToReach}
              onChange={this.onChangeTimeToReach}
            >
              <option value="morning">morning</option>
              <option value="afternoon">afternoon</option>
              <option value="evening">evening</option>
            </select>
          </div>
          <button type="submit">Send Query</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
