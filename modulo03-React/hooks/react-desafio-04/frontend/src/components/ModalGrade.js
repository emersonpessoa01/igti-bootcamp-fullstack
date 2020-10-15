import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as api from "./api/ApiService";

Modal.setAppElement("#root");

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const { student,id, subject, type } = selectedGrade;

  const [gradeValue, setGradeValue] = useState(selectedGrade.value);
  const [gradeValidation, setGradeValidation] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getValidation = async () => {
      const validation = await api.getValidationFromGradeType(
        selectedGrade.type
      );
      setGradeValidation(validation);
    };

    getValidation();
  }, [selectedGrade.type]);

  useEffect(() => {
    const { minValue, maxValue } = gradeValidation;
    if (gradeValue < minValue || gradeValue > maxValue) {
      setErrorMessage(
        `o valor da nota deve ser entre ${minValue} e ${maxValue}(inclusive)`
      );
      return;
    }

    setErrorMessage("");
  }, [gradeValue, gradeValidation]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (evt) => {
    if (evt.key === "Escape") {
      onClose(null);
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      id,
      newValue: gradeValue,
    }

    onSave(formData)
  };

  const handleModalClose = () => {
    onClose(null);
  };

  const handleGradeChange = (evt) => {
    // console.log(evt.target.value)
    //  console.log(gradeValidation);
    setGradeValue(+evt.target.value);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Manutenção de notas</span>&nbsp;&nbsp;
          <button
            className="waves-effect waves-light btn-small red dark-4"
            onClick={handleModalClose}
          >
            x
          </button>
        </div>

        <form onSubmit={handleFormSubmit}>
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
            <input
              id="inputGrade"
              type="number"
              min={gradeValidation.minValue}
              max={gradeValidation.maxValue}
              step="1"
              autoFocus
              value={gradeValue}
              onChange={handleGradeChange}
            />

            <label className="active" htmlFor="inputGrade">
              Nota
            </label>
          </div>

          <div style={styles.flexRow}>
            <button
              className="waves-effect waves-ligth btn small"
              disabled={errorMessage.trim() !== ""}
            >
              Salvar
            </button>
            <span style={styles.errorMessage}>{errorMessage}</span>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },

  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
};
