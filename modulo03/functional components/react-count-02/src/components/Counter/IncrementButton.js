import React from "react";

export default function IncrementButton(props) {
  const{onIncrement} = props;
  const handleButtonClick = () => {
    //this.props.onIncrement("+");
    onIncrement("+");
  };

  return (
    <button
      onClick={handleButtonClick}
      className="waves-effect waves-ligth btn blue darken-4"
    >
      +
    </button>
  );
}
