import React, { Component } from "react";
import css from "./counter.module.css";

export default class Counter extends Component {
  constructor() {
    super();

    //this.currentCounter = 2;
    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }

  handleButtonUpClick = () => {
    //console.log("Click");
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter + 1,
      steps: steps + 1,
    });
    this.render();
  };

  handleButtonDownClick = () => {
    //console.log("Click");
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    });
    this.render();
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className={css.counterContainer}>
        <button
          onClick={this.handleButtonUpClick}
          className="waves-effect waves-ligth btn red darken-4"
        >
          +
        </button>
        <span className={css.counterValue}>{currentCounter}</span>

        <button
          onClick={this.handleButtonDownClick}
          className="waves-effect waves-ligth btn blue darken-4"
        >
          -
        </button>
        <span className={css.counterValue}>({steps})increment</span>
      </div>
    );
  }
}

export { Counter };
