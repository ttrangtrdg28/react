import React, { Component } from "react";

export default class RegisterForm extends Component {
  state = {
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  };

  handleChange = (event) => {
    // console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    // onChange={(event) => {this.handleChange(event)}}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="username"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="fullName"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="password"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="type"
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                  <span className="text-danger"></span>
                </div>
              </div>
            </div>

            <button className="btn btn-warning mr-2">SAVE</button>
            <button className="btn btn-outline-dark" type="reset">
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  }
}
