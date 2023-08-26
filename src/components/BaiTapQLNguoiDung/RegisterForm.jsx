import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  addUserAction,
  updateUserAction,
} from "../../store/actions/userActions";

class RegisterForm extends Component {
  usernameInputRef = createRef();
  fullnameInputRef = createRef();
  passwordInputRef = createRef();
  phoneNumberInputRef = createRef();
  emailInputRef = createRef();

  state = {
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  };

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedUser &&
      nextProps.selectedUser.id !== currentState.id
    ) {
      currentState = nextProps.selectedUser;
    }

    return currentState;
  }

  handleChange = (event) => {
    // console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateRequired = (value, ref, message) => {
    if (value) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = message;
    return false;
  };

  validateEmail = (value, ref, message) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = message;
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    isValid &= this.validateRequired(
      this.state.username,
      this.usernameInputRef.current,
      "Username không được bỏ trống!!!"
    );

    isValid &=
      this.validateRequired(
        this.state.email,
        this.emailInputRef.current,
        "Email không được bỏ trống!!!"
      ) &&
      this.validateEmail(
        this.state.email,
        this.emailInputRef.current,
        "Email không đúng định dạng!!!"
      );

    if (isValid) {
      if (this.state.id) {
        this.props.dispatch(updateUserAction(this.state));
      } else {
        this.props.dispatch(addUserAction(this.state));
      }
    }
    this.setState({
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      email: "",
      type: "Client",
    });
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
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="username"
                  />
                  <span
                    className="text-danger"
                    ref={this.usernameInputRef}
                  ></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="fullName"
                  />
                  <span
                    className="text-danger"
                    ref={this.fullnameInputRef}
                  ></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="password"
                  />
                  <span
                    className="text-danger"
                    ref={this.passwordInputRef}
                  ></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                  />
                  <span
                    className="text-danger"
                    ref={this.phoneNumberInputRef}
                  ></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="email"
                  />
                  <span className="text-danger" ref={this.emailInputRef}></span>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    value={this.state.type}
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

const mapStateToProps = (state) => {
  return {
    selectedUser: state.userReducer.selectedUser,
  };
};

export default connect(mapStateToProps)(RegisterForm);
