import React, { useState, useEffect } from "react";
import Form from "./components/Form";

export default function App() {
  const [capital, setCapital] = useState(0);
  const [interest, setInterest] = useState(0);
  const [period, setPeriod] = useState(0);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculteInterest(capital, interest, period);
  }, [capital, interest, period]);

  const calculteInterest = (capital, interest, period) => {
    const newInstallments = [];

    let currentId = 1;
    let currentCapital = capital;
    let rate = 0;

    for (let i = 1; i <= period; i++) {
      const percentCapital = (currentCapital * interest) / 100;

      currentCapital =
        interest >= 0
          ? currentCapital + percentCapital
          : currentCapital - percentCapital;
      rate = ((currentCapital / capital) ** 1 / i - 1) / 100;

      newInstallments.push({
        id: currentId++,
        value: currentCapital,
        difference: currentCapital - capital,
        rate,
        profit: interest > 0,
      });
    }
    setInstallments(newInstallments);
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
    <div className="container center">
      <h1>React Juros Compostos</h1>

      <Form
        data={{ capital, interest, period }}
        onChangeData={handleChangeData}
      />
    </div>
  );
}
