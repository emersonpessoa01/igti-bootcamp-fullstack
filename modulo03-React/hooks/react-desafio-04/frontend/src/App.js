import React, { useEffect, useState } from "react";
import * as api from "./components/api/apiService";
import GradesControl from "./components/GradesControl";
import Spinner from "./components/Spinner";
import css from "./components/spinner.module.css";

export default function App() {
  //teste da api
  // const testApi = async()=>{
  //   const res = await api.getAllGrades();
  //   console.log(res);
  // }
  // testApi();
  const [allGrades, setAllGrades] = useState([]);
  const [seletedGrades, setSeletedGrades] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // api.getAllGrades().then((grade)=>{
    //   setTimeout(() => {
    //     setAllGrades(grade)
    //   },2000);
    // });

    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 2000);
    };
    getGrades();
  }, []);

  const handleDelete = () => {
    console.log("handleDelete");
  };

  const handlesPersist = () => {};

  return (
    // <div style = {css.flexRow}>
      <div className="container">
        <h1 className={css.flexRow} align="center">
          Controle de notas
        </h1>
        {/* teste - sendo verdadeiro faca o que sta do lado de ca */}
        {allGrades.length > 0 && (
          <GradesControl
            grades={allGrades}
            onDelete={handleDelete}
            onPersist={handlesPersist}
          />
        )}
        {allGrades.length == 0 && <Spinner />}
      </div>
  );
}

// const styles = {
//   flexRow:{
//     display:'flex',
//     fleDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center'.
//   }
// }
