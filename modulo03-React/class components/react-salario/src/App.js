import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import { calculateSalaryFrom } from "./helpers/salary";

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
  handleFullSalaryChange = (event) => {
    const newValue = +event.target.value;
    this.setState({ fullSalary: newValue });
  };

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);
    // console.log(salaryObject)

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = salaryObject;

    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>
        <div className="row">
          <InputReadOnly lable="Base INSS" value={salaryObject.baseINSS} />
        </div>
      </div>
    );
  }
}
