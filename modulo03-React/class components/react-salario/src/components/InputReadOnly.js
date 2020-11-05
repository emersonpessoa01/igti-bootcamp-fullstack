import React, { Component } from "react";

export default class InputReadOnly extends Component {
  render() {
    const { color = "black", value, percentage = 0, label } = this.props;
    // console.log(this.props)
    const formattedPercentage = percentage > 0 ? `(${percentage})` : "";
    const formatterValue = `${value} ${formattedPercentage}`;
    // console.log(formatterValue)

    return (
      <div className="input-field col s12 m6 l3">
        <input
          id="inputReadOnly"
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
