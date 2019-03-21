import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to App</h1>
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
