import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";
import css from "./components/app.module.css";

export default function App() {
  const [capital, setCapital] = useState(1000);
  const [interest, setInterest] = useState(1);
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculteInterest(capital, interest, period);
  }, [capital, interest, period]);

  const calculteInterest = (capital, interest, period) => {
    const newInstallments = []; //array de novas parcelas

    let currentId = 1;
    let amount = capital;
    let rate = 0;

    //fazendo um iteracao das parcelas comecando com menor ou igual a 1
    for (let i = 1; i <= period; i++) {
      //juros em capital = montante x juros%
      const percentCapital = (amount * Math.abs(interest)) / 100;

      //se o juros% for maior ou igual a zero.Retorne montante + capitalJuros.Senao, montante - capitalJuros
      amount =
        interest >= 0 ? amount + percentCapital : amount - percentCapital;

      //taxe de juros
      rate = (amount / capital - 1) * 100;

      newInstallments.push({
        id: currentId++,
        amount,
        difference: (amount - capital).toFixed(2),
        rate: rate.toFixed(2).replace(".", ","),
        profit: interest > 0,
      });
    }
    setInstallments(newInstallments);

    console.log(newInstallments);
  };

  //funcao aguardando event.target.value para executar e gerar novo montante, novo juros e novas parcelas
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
      <div>
        <h1 className={css.headerName}>React - Juros Compostos</h1>

        <Form
          data={{ capital, interest, period }}
          onChangeData={handleChangeData}
        />
      </div>

      <Installments data={installments} />
    </div>
  );
}

