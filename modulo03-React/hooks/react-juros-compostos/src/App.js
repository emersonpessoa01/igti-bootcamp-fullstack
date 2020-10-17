import React, { useState } from "react";

export default function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(1);
  const [monthlyPeriod, setMonthlyPeriod] = useState(1);
  const [initi] = useState(1000);



  return (
    <div>
      <h1>React Juros Compostos</h1>
    </div>
  );
}
