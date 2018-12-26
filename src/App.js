import React, { Component } from "react";
import "./App.css";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
