import React from "react";

export default function Number({ number }) {
  const { description, value, count } = number;
  const { containerStyle, numberStyle, badgeContainer, badgeStyle } = styles;

  return (
    <div style={containerStyle}>
      <span style={numberStyle}>{description}</span>
      <span style={badgeContainer}>
        <span style={badgeStyle}>{count}</span>
      </span>
    </div>
  );
}

const styles = {
  containerStyle: {
    border: "1px solid lightgray",
    borderRadius: "4px",
    padding: "4px",
    margin: "5px",

    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "80px",
  },

  numberStyle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginRight: "10px",
  },

  badgeContainer: {
    minWidth: "30px",
    minHeight: "30px",
    border: "1px solid transparent",
    borderRadius: "50%",
    backgroundColor: "#DD0031",

    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  badgeStyle: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "white",
  },
};
