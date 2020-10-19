import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
  const [capital, setCapital] = useState(1000);
  const [interest, setInterest] = useState(1);
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculteInterest(capital, interest, period);
  }, [capital, interest, period]);

  const calculteInterest = (capital, interest, period) => {
    const newInstallments = [];

    let currentId = 1;
    let amount = capital;
    let rate = 0;

    for (let i = 1; i <= period; i++) {
      const percentCapital = (amount * Math.abs(interest)) / 100;

      amount =
        interest >= 0 ? amount + percentCapital : amount - percentCapital;
      rate = (amount / capital - 1) * 100;

      newInstallments.push({
        id: currentId++,
        amount,
        difference: (amount - capital).toFixed(2),
        rate: rate.toFixed(2),
        profit: interest > 0,
      });
    }
    setInstallments(newInstallments);

    console.log(newInstallments);
  };

  const handleChangeData = (newCapital, newInterest, newPeriod) => {
    if (newCapital !== null) {
      setCapital(newCapital);
      return;
    }
    if (newInterest !== null) {
      setInterest(newInterest);
      return;
    }

    if (newPeriod !== null) {
      setPeriod(newPeriod);
      return;
    }
  };

  return (
    <div>
      <div className="container center">
        <h1>React Juros Compostos</h1>

        <Form
          data={{ capital, interest, period }}
          onChangeData={handleChangeData}
        />
      </div>

      <Installments data={installments} />
    </div>
  );
}
