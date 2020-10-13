import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as api from "./api/ApiService";


Modal.setAppElement("#root");

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const {student, subject, type}= selectedGrade;

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

  const handleFormSubmit=(evt)=>{}

  const handlGradeChange=(evt)=>{}

  return (
    <div>
      <Modal isOpen={true}>
        <form onSubmit={handleFormSubmit}></form>

        <div className="input-field">
          <input id="inputName" type="text" value={student} readOnly />
          <label className="active" htmlFor="inputName">
            Nome do aluno:
          </label>
        </div>

        <div className="input-field">
          <input id="inputSubject" type="text" value={subject} readOnly />
          <label className="active" htmlFor="inputSubject">
            Disciplina:
          </label>
        </div>

        <div className="input-field">
          <input id="inputType" type="text" value={type} readOnly />
          <label className="active" htmlFor="inputType">
            Tipo de avaliação:
          </label>
        </div>

        <div className="input-field">
          <input id="inputGrade" type="number" min={gradeValidation.minValue} max={gradeValidation.maxValue} step="1" autoFocus
          value={gradeValue} onChange={handlGradeChange} />

          <label className="active" htmlFor="inputGrade">Nota</label>
        </div>
      </Modal>
    </div>
  );
}
