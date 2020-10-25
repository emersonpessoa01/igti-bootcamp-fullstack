import React, { Component } from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default class Counter2 extends Component {
  // handleButtonClick = (clickType) => {
  //   const { currentCounter, steps } = this.state;

  //   this.setState({
  //     currentCounter: clickType === '+'? currentCounter + 1: currentCounter - 1,
  //     steps: steps + 1,
  //   });
  // };
  handleButtonClick = (clickType) => {
    // console.log(clickType)
    this.props.onCount(clickType);
  };

  render() {
    // const { currentCounter, steps } = this.state;
    const { countValue, currentStep } = this.props;

    return (
      <div className={css.counterContainer}>
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Value value={countValue} />
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Steps currentSteps={currentStep} />
      </div>
    );
  }

}
