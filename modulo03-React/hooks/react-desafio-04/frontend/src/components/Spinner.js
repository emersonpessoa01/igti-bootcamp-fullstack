import React from "react";
import css from "./spinner.module.css";

/**
 * Componente para exibir um spinner
 * em tela. Útil para indicar ao usuário
 * que algo está sendo processado
 */
export default function Spinner({ description = "Aguarde..." }) {
  return (
    <div className="container">
      <div className={css.spinner}>
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      </div>
    </div>
  );
}

// const styles = {
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontfamily: "Montserrat",
//     color: "white",
//   },
// };

{
  /* <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
        {description}
      </span> */
}
