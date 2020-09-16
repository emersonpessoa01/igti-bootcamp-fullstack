import React from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default function Counter2(props) {
  // handleButtonClick = (clickType) => {
  //   const { currentCounter, steps } = this.state;

  //   this.setState({
  //     currentCounter: clickType === '+'? currentCounter + 1: currentCounter - 1,
  //     steps: steps + 1,
  //   });
  // };
  const handleButtonClick = (clickType) => {
    // console.log(clickType)
    props.onCount(clickType);
  };

  // const { currentCounter, steps } = this.state;
  const { countValue, currentStep } = props;

  return (
    <div className={css.counterContainer}>
      <IncrementButton onIncrement={handleButtonClick} />
      <Value value={countValue} />
      <DecrementButton onDecrement={handleButtonClick} />
      <Steps currentSteps={currentStep} />
    </div>
  );
}
