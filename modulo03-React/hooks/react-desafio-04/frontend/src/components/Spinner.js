import React from "react";
import css from "./spinner.module.css";

export default function Spinner() {
  return (
    // <div style={styles.spinner}>
    //   <div className="preloader-wrapper small active">
    //     <div className="spinner-layer spinner-blue-only">
    //       <div className="circle-clipper left">
    //         <div className="circle"></div>
    //       </div>
    //       <div className="gap-patch">
    //         <div className="circle"></div>
    //       </div>
    //       <div className="circle-clipper right">
    //         <div className="circle"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <span style={{marginLeft:'10px', fontSize:'1.2rem'}}>Aguarde...</span>
    // </div>
    <div className="container">
      <div className={css.notes}>
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
        <span>Aguarde...</span>
      </div>
    </div>
  );
}

// const styles = {
//    spinner: {
//     display:'flex',
//      flexRow: 'row',
//      alignItems: 'center',
//      justifyContent: 'center',
//   }
// }
