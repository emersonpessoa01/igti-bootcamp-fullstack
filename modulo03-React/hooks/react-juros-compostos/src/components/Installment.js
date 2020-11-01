import React from "react";

const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatNumber = (number) => {
  return formatter.format(number);
};

const formatterPositiveNegative = (number) => {
  const money = formatter.format(number);

  if (number >= 0) {
    return `+${money}`;
  }
  return money;
};

export default function Installment({ data }) {
  const { id, amount, difference, rate, profit } = data;

  const classGoodCapital = "green-text darken-4";
  const classGoodRate = "blue-text darken-4" ;
  const classBadCapital = "red-text darken-4";
  const classBadRate = "orange-text darken-4";

  const classCapital = profit ? classGoodCapital : classBadCapital;
  const classRate = profit ? classGoodRate : classBadRate;
  

  return (
    <div className="col s6 m3 l2" style={styles.flexRow}>
      {/* <div>{profit ? `<div style={styles.circleGreen}>${id}</div>`:`<div style={styles.circleGreen}>${id}</div>`}*/}
      <div style={styles.circleGreen}>{id}</div>

      <div >
        <div style={styles.alignFonts}>
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
  circleGreen: {
    // marginRight: "5px",
    // backgroundColor: "#fa0c01",
    // color: "#fff",
    // width: "60px",
    // height: "30px",
    // lineHeight: "60px",
    verticalAlign: "middle",
    // textAlign: "",
    // fontSize: "30px",

    // bordeRadius: "50%",
    // mozBorderRadius: "50%",
    // webkitBorderRadius: "50%",
    margin: 0,
    padding: 0,
    listStyle: "none",

    backgroundColor: "#107C10",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    float: "left",
    
    // margin: "4px",
    // fontSize: "30px",
    fontWeight: "bold",
    // color: "#555",
  },
  circleRed: {
    verticalAlign: "middle",
    margin: 0,
    padding: 0,
    listStyle: "none",

    backgroundColor: "#FF0000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    float: "left",
    fontWeight: "bold",
  },

  alignFonts:{
    alignItems: "left",
  }
};
