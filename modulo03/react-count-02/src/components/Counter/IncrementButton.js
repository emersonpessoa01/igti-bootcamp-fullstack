import React, { Component } from "react";

export default class IncrementButton extends Component {
  handleButtonClick = () => {
    this.props.onIncrement("+");
  };

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-ligth btn red darken-4"
      >
        +
      </button>
    );
  }
}
