import React, { useEffect, useState } from "react";
import * as api from "./components/api/apiService";

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

  return (
    <div className="container">
      <h1 className="center">Controle de notas</h1>

      {/* teste - sendo verdadeiro faca o que sta do lado de ca */}
      {allGrades.length > 0 && <p>Notas disponíveis</p>}
      {allGrades.length == 0 && <p>Carregando notas...</p>}
    </div>
  );
}
