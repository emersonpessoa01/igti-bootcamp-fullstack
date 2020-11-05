import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }
  // handleFullSalaryChange=(newValue) => {
  //   this.setState({ fullSalary: newValue})
  // }
  handleFullSalaryChange=(event) => {
    const newValue = +event.target.value
    this.setState({ fullSalary: newValue})
  }

  render() {
    const { fullSalary } = this.state;
    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>
      </div>
    );
  }
}
