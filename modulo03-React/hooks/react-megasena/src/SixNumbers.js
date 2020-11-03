import React from "react";

export default function SixNumbers({ numbers }) {
  if (numbers.length === 0) {
    return null;
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const textNumbers = sortedNumbers.map(number=>{
    return number.toString().padStart(2, "0");
  }).join(" - ");

  return (
    <div>
      <p>
        <strong>Números sorteados: </strong> {textNumbers}
      </p>
    </div>
  );
}
