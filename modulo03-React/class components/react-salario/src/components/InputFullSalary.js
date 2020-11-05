import React, { Component } from "react";

export default class InputFullSalary extends Component {
  // handleInputChange=(event) => {
  //   const newValue = +event.target.value
  //   this.props.onSalaryChange(newValue)
  // }


  render() {
    const { currentValue, onSalaryChange } = this.props;

    return (
      <div className="input-field col 12">
        <input
          autoFocus
          id="inputFullSalary"
          type="number"
          value={currentValue}
          // onChange={this.handleInputChange}
          onChange={onSalaryChange}
          min="1000"
          step="100"
        />
        <label className="active" htmlFor="inputFullSalary">Salário Bruto</label>
      </div>
    );
  }
}
