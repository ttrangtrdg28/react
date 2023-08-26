import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUserAction,
  setSelectedUserAction,
} from "../../store/actions/userActions";

class UserManagement extends Component {
  state = {
    keyword: "",
    type: "",
  };

  renderContent = () => {
    let data = this.props.userList.filter((element) => {
      return (
        element.fullName
          .toLowerCase()
          .indexOf(this.state.keyword.toLowerCase()) !== -1
      );
    });

    data = data.filter((element) => element.type === this.state.type);

    return data.map((element, index) => {
      const { id, username, fullName, phoneNumber, email, type } = element;

      const bg = index % 2 === 0 ? "bg-light" : "";
      return (
        <tr key={id} className={bg}>
          <td>{index + 1}</td>
          <td>{username}</td>
          <td>{fullName}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>{type}</td>
          <td>
            <button
              className="btn btn-info mr-2"
              onClick={() =>
                this.props.dispatch(setSelectedUserAction(element))
              }
            >
              EDIT
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.dispatch(deleteUserAction(element))}
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    return (
      <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">USER MANAGEMENT</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3 ml-auto">
            <div className="form-group mb-0">
              <select className="form-control">
                <option>All</option>
                <option>Client</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
  };
};

export default connect(mapStateToProps)(UserManagement);
