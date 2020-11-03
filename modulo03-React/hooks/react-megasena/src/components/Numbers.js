import React from "react";
import Number from "../Number";

export default function Numbers({ numbers }) {
  const { container} = styles;

  return (
    <div style={container}>
      {numbers.map((number) => {
        return <Number key={number.id} />;
      })}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    //pra quebrar no flex
    flexWrap: "wrap",
  },
};
