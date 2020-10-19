import React from "react";
import Installment from "./Installment";

export default function Installments({ data }) {
  return (
    <div className="row">
      {data.map(( item) => {
        // console.log(`Montante:${item.amount}`)
        //  return <span key={id}>{amount}</span>;
        const { id } = item;
        return <Installment key={id} data={id} />;
      })}
    </div>
  );
}
