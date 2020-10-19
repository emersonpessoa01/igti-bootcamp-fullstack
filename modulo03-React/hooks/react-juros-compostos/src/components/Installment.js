import React from "react";

const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatNumber = (number) => {
  return formatter.format(number);
};

const formatterPositiveNegative = (number) =>{
  const money = formatter.format(number)

  if(number >= 0){
    return `+${money}`
  }
  return money;
}

export default function Installment({ data }) {
  const { id, amount, difference, rate, profit } = data;

  const classGoodCapital = "green-text darken-4";
  const classGoodRate = "blue-text darken-4";
  const classBadCapital = "red-text darken-4";
  const classBadRate = "orange-text darken-4";

  const classCapital = profit ? classGoodCapital : classBadCapital;
  const classRate = profit ? classGoodRate : classBadRate;

  return (
    <div className="col s6 m3 l2">
      <div style={styles.flexRow}>
        <div style={{ marginRight: "5px" }}>
          <strong>{id}</strong>
        </div>
        <div>
          <div className={classCapital}>
            <strong>{formatNumber(amount)}</strong>
          </div>
          <div className={classCapital}>
            <strong>{formatterPositiveNegative(difference)}</strong>
          </div>
          <div className={classRate}>
            <strong>{rate}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  flexRow: {
    display: "flex",
    flexRow: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    border: "1px solid lightgray",
    borderRadius: "4px",
    padding: "4px",
    margin: "4px",
  },
};
