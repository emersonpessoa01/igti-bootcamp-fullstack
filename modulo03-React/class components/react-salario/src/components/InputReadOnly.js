import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    const { color = "black", value, percentage, label } = this.props;

    const formatterValue = `${value} (${percentage})`;
    return (
      <div className="input-field col s12 m6 l3">
        <input
          id="inputReadOnly"
          type="number"
          value={formatterValue}
          readOnly
        />
        <label className="active" htmlFor="inputReadOnly">
          {label}
        </label>
      </div>
    );
  }
}
