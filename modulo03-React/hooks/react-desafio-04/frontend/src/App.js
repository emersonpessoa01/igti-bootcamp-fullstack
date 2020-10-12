import React, { useLayoutEffect, useState } from "react";
import * as api from "./components/api/ApiService";
import GradesControl from "./components/GradesControl";
import Spinner from "./components/Spinner";

export default function App() {
  //teste da api
  // const testApi = async()=>{
  //   const res = await api.getAllGrades();
  //   console.log(res)

  // }
  // testApi();

  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 2000);
    };
    // api.getAllGrades().then((grades) => {
    //   setTimeout(() =>{
    //     setAllGrades(grades)})
    //   },2000)

    getGrades();
  }, []);

  const handleDelete = async (gradeToDelete) => {
    const isDeleted = await api.deleteGrade(gradeToDelete);

    if (isDeleted) {
      const deleteGradeIndex = allGrades.findIndex(
        (grade) => grade.id === gradeToDelete.id
      );
      const newGrades = Object.assign([],allGrades);
      newGrades[deleteGradeIndex].isDeleted = true;
      newGrades[deleteGradeIndex].value = 0;

      setAllGrades(newGrades);

    }
  };
  const handlePersist = () => {
    console.log("handleDelete");
  };

  return (
    <div>
      <h1 className="center">Controle de notas</h1>

      {allGrades.length == 0 && <Spinner />}
      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDelete}
          onPersist={handlePersist}
        />
      )}
    </div>
  );
}
