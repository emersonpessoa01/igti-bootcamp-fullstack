import React from "react";
import Number from "../Number";

export default function Numbers({ numbers }) {
  const { container } = styles;

  return (
    <div style={container}>
      {numbers.map((number) => {
        return <Number key={number.id} number={number} />;
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
    // border: "1px solid blue",
  },
};
