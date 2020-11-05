import React, { Component } from "react";

export default class InputFullSalary extends Component {
  render() {
    const { currentValue } = this.props;

    return (
      <div className="input-field col 12">
        <input
          autoFocus
          id="inputFullSalary"
          type="number"
          value={currentValue}
          onChange={this.handleInputChange}
          min="1000"
          step="100"
        />
        <label className="active" htmlFor="inputFullSalary">Salário Bruto</label>
      </div>
    );
  }
}
