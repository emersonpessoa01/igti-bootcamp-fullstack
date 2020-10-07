import React from "react";
import css from "./spinner.module.css"

export default function Spinner() {
  return (
    // <div style={styles.spinner}>
    <div >
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
      <span className={css.spinner}> Aguarde...</span>
    </div>
  );
}

// const styles = {
//   spinner:{
//     fontFamily: "Montserrat",
//   }
// }
