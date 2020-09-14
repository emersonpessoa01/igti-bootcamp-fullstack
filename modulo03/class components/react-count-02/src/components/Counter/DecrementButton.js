import React, { Component } from "react";

export default class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement("-");
  };

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-ligth btn blue darken-4"
      >
        -
      </button>
    );
  }
}
