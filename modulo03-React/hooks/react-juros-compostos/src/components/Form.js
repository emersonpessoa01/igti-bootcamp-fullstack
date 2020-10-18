import React from "react";

export default function Form({ data, onChangeData }) {
  const { initialValue, monthlyInterest, monthlyPeriod } = data;


  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <input
          id="inputInitialvalue"
          autoFocus
          type="number"
          value={initialValue}
          min="0"
          step="50"
          onChange={(evt) => {
            onChangeData(+evt.target.value, null, null);
          }}
        />
        <label htmlFor="inputInitialvalue" className="active">
          Capital inicial
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyInterest"
          type="number"
          value={monthlyInterest}
          min="-12"
          max="12"
          step="0.1"
          onChange={(evt) => {
            onChangeData(null, +evt.target.value, null);
          }}
        />
        <label htmlFor="inputMonthlyInterest" className="active">
          Taxa de juros mensal
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyPeriod"
          type="number"
          value={monthlyPeriod}
          min="0"
          step="36"
          onChange={(evt) => {
            onChangeData(null, null, +evt.target.value);
          }}
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          Período mensal
        </label>
      </div>
    </div>
  );
}
