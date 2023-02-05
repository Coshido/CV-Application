import React, { Component } from "react";
import "../styles.css";

class EduPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: false,

      school: "",
      startDate: "",
      endDate: "",
      field: "",
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

    const school = document.querySelector("#school");
    const startDate = document.querySelector("#start-date");
    const endDate = document.querySelector("#end-date");
    const field = document.querySelector("#field");

    this.setState({
      school: school.value,
      startDate: startDate.value,
      endDate: endDate.value,
      field: field.value,
    });
    this.handleShowEdit();
  }
  handleChange(e) {
    this.setState({
      school: e.target.school,
      startDate: e.target.startDate,
      endDate: e.target.endDate,
      field: e.target.field,
    });
  }
  EduPanelDisplay() {
    const edu = this.state;
    return (
      <div id="edu-div">
        <p>School/Course: {edu.school}</p>
        <p>Start Date: {edu.startDate}</p>
        <p>End Date: {edu.endDate}</p>
        <p>Field of study: {edu.field}</p>
        <button onClick={this.handleShowEdit}>Edit</button>
      </div>
    );
  }
  EduPanelEdit() {
    const edu = this.state;
    return (
      <form id="edu-form" onSubmit={this.handleSubmit}>
        <label htmlFor="school">School/Course </label>
        <input
          id="school"
          type="text"
          value={edu.school}
          onChange={this.handleChange}
        />
        <label htmlFor="start-date">Start Date </label>
        <input
          id="start-date"
          type="date"
          value={edu.startDate}
          onChange={this.handleChange}
        />
        <label htmlFor="end-date">End Date </label>
        <input
          id="end-date"
          type="date"
          value={edu.endDate}
          onChange={this.handleChange}
        />
        <label htmlFor="field">Field of Study </label>
        <input
          id="field"
          type="text-area"
          value={edu.field}
          onChange={this.handleChange}
        />
        <input id="submit" type="Submit" value="Submit" />
      </form>
    );
  }
  render() {
    return (
      <div>
        <h2>Education</h2>
        {(() => {
          return this.state.showEdit
            ? this.EduPanelEdit()
            : this.EduPanelDisplay();
        })()}
      </div>
    );
  }
}

export default EduPanel;
