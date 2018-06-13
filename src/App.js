import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SaveButton from "./components/SaveButton/SaveButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to lcb</h1>
        </header>
        <Card />
        <SaveButton />
      </div>
    );
  }
}

export default App;
