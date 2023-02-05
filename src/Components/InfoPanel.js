import React, { Component } from "react";
import "../styles.css";

class InfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: false,

      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    this.handleShowEdit = this.handleShowEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleShowEdit() {
    this.setState({ showEdit: !this.state.showEdit });
  }

  handleSubmit(e) {
    e.preventDefault();

    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    this.setState({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
    });
    this.handleShowEdit();
  }

  handleChange(e) {
    this.setState({
      firstName: e.target.firstName,
      lastName: e.target.lastName,
      email: e.target.email,
      phone: e.target.phone,
    });
  }
  InfoPanelDisplay() {
    const info = this.state;
    return (
      <div id="info-div">
        <p>First Name: {info.firstName}</p>
        <p>Last Name: {info.lastName}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <button onClick={this.handleShowEdit}>Edit</button>
      </div>
    );
  }

  InfoPanelEdit() {
    const info = this.state;
    return (
      <form id="info-form" onSubmit={this.handleSubmit}>
        <label htmlFor="first-name">First Name </label>
        <input
          id="first-name"
          type="text"
          value={info.firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="last-name">Last Name </label>
        <input
          id="last-name"
          type="text"
          value={info.lastName}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="email"
          value={info.email}
          onChange={this.handleChange}
        />
        <label htmlFor="phone">Phone </label>
        <input
          id="phone"
          type="phone"
          value={info.phone}
          onChange={this.handleChange}
        />
        <input id="submit" type="Submit" value="Submit" />
      </form>
    );
  }
  render() {
    return (
      <div>
        <h2>General Information</h2>
        {(() => {
          return this.state.showEdit
            ? this.InfoPanelEdit()
            : this.InfoPanelDisplay();
        })()}
      </div>
    );
  }
}

export default InfoPanel;
