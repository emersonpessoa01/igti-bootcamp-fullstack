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
    marginBottom:"1px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    //pra quebrar no flex
    flexWrap: "wrap",
    // border: "1px solid blue",
  },
};
