import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as api from "./api/ApiService";


Modal.setAppElement("#root");

export default function ModalGrade({ onSave, onClose, selectedGrade }) {

  const [gradeValue, setGradeValue] = useState(selectedGrade.value);
  const [gradeValidation, setGradeValidation] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const validation = api.getValidationFromGradeType(selectedGrade.type)
    setGradeValidation(validation);
  }, [selectedGrade.type]);

  useEffect(() => {
    const {minValue, maxValue} = gradeValidation;
    if (gradeValue < minValue || gradeValue > maxValue) {
      setErrorMessage(
        `o valor da nota deve ser entre ${minValue} e ${maxValue}(inclusive)`
      );
      return;
    }

    setErrorMessage("");
  }, [gradeValue, gradeValidation]);

  useEffect(() => {
    document.addEventListener('keydown',handleKeyDown);
    return () => {
      document.removeEventListener('keydown',handleKeyDown);
    }
  })

  const handleKeyDown =(evt)=>{
    if(evt.key === "Escape"){
      onClose(null);
    }
  }

  return (
    <div>
      <Modal isOpen={true} />
    </div>
  );
}
