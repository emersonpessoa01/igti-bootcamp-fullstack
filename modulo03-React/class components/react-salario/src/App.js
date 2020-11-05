import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row"><InputFullSalary /></div>
      </div>
    );
  }
}
