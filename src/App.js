import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import Information from "./Components/Information";
import ProfileImage from "./Components/ProfileImage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amanda Cruise",
      level: "Beginner",
      rank: 28,
      point: 756,
      profileCompleted: 88,
    };
  }
  render() {
    // const { data } = this.state;
    return (
      <div className="Container">
        <ProfileImage />
        <Information data={this.state} />
        <Button />
      </div>
    );
  }
}

export default App;
