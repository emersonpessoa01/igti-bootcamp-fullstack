import React, { useEffect, useState } from "react";

import * as api from "./components/api/ApiService";
import GradesControl from "./components/GradesControl";
import Spinner from "./components/Spinner";

export default function App() {
  //console.log(api.getAllGrades())
  // const testApi = async()=>{
  //   const res = await api.getAllGrades();
  //   console.log(res)
  // }
  // testApi()
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        return setAllGrades(grades);
      }, 2000);
    };
    //  api.getAllGrades().then((grades) => {
    //    setTimeout(() => {
    //      return setAllGrades(grades)
    //    }, 2000);
    //  })
    getGrades()
  }, []);

  const handleDelete=()=>{
    console.log('handleDelete')
  }
  const handlePersist=()=>{
    console.log('handlePersist')
  }

  return (
    <div>
      <h1 className="center">Controle de notas</h1>
      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDelete}
          onPersist={handlePersist}
        />
      )}
      {allGrades.length == 0 && <Spinner />}
    </div>
  );
}
