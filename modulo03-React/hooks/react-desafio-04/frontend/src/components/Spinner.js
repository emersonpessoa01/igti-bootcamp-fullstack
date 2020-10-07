import React from "react";

export default function Spinner() {
  return (
    <div style={styles.spinner}>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
      <span>Aguarde...</span>
    </div>
  );
}

const styles = {
  spinner:{
    fontFamily: "Montserrat",
  }
}
