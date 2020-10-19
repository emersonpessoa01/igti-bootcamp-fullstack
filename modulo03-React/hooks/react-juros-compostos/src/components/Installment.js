import React from "react";

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
        <div style={{ marginRight: "5px" }}>{id}</div>
        <div>
          <div>{amount}</div>
          <div>{difference}</div>
          <div>{rate}</div>
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

    border: "1px solid black",
    borderRadius: "4px",
    padding: "4px",
    margin: "4px",
  },
};
