import React, { Component } from "react";
import HoverButtons from "./HoverButtons";
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
       <div className="App">
        <HoverButtons/>
        </div>
    );
  }
}

export default Home;
