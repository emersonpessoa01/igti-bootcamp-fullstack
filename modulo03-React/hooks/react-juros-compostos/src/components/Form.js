import React from "react";

export default function Form({ data, onChangeData }) {
  const { capital, interest, period } = data;

  return (
    <div className="center row">
      <div className="col input-field s6 m3 l6">
        <input
          id="inputCapital"
          autoFocus
          type="number"
          value={capital}
          min="0"
          step="50"
          onChange={(evt) => {
          onChangeData(+evt.target.value, null, null);

          }}
        />
        <label htmlFor="inputCapital" className="active">
          Capital inicial
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputInterest"
          type="number"
          value={interest}
          min="-12"
          max="12"
          step="0.1"
          onChange={(evt) => {
          onChangeData(null, +evt.target.value, null);

          }}
        />
        <label htmlFor="inputInterest" className="active">
          Taxa de juros(%a.m)
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputPeriod"
          type="number"
          value={period}
          min="0"
          step="1"
          onChange={(evt) => {
          onChangeData(null, null, +evt.target.value);

          }}
        />
        <label htmlFor="inputPeriod" className="active">
          Parcelas
        </label>
      </div>
    </div>
  );
}
