import React, { Component } from "react";
import InfoPanel from "./Components/InfoPanel";
import EduPanel from "./Components/EduPanel";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //infoShowEdit: false,
      //eduShowEdit: false,
      expShowEdit: false,
    };
  }

  render() {
    return (
      <div className="wrapper">
        <InfoPanel />
        <div className="line" />
        <EduPanel />
      </div>
    );
  }
}

export default App;
