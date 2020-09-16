import React from "react";

export default function DecrementButton({onDecrement}){
  const handleButtonClick = () => {
    onDecrement("-");
  };

    return (
      <button
        onClick={handleButtonClick}
        className="waves-effect waves-ligth btn red darken-4"
      >
        -
      </button>
    );
}
