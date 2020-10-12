import React from "react";
import Action from "./Action";

/**
 * Componente para montar tabelas
 * de notas em tela, agrupando por
 * aluno e disciplina
 */
export default function GradesControl({ grades, onDelete, onPersist }) {
  const tableGrades = [];

  let currentStudent = grades[0].student;
  let currentSubject = grades[0].subject;
  let currentGrades = [];
  let id = 1;

  grades.forEach((grade) => {
    if (grade.subject !== currentSubject) {
      tableGrades.push({
        id: id++,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrades,
      });

      currentSubject = grade.subject;
      currentGrades = [];
    }
    if (grade.student !== currentStudent) {
      currentStudent = grade.student;
    }

    currentGrades.push(grade);
  });

  //apos o loop devemos
  //inserir o ultimo elemento
  tableGrades.push({
    id: id++,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrades,
  });

  console.log(tableGrades);

  const handleActionClick = (id, type) => {
    const grade = grades.find(grade => grade.id === id);
    if(type === "delete"){
      onDelete(grade)
    }
  };

  return (
    <div className="cont ainer">
      {tableGrades.map(({ id, grades }) => {
        const finalGrades = grades.reduce((acc, curr) => acc + curr.value, 0);
        const gradeStyle =
          finalGrades >= 70 ? styles.goodGrade : styles.badGrade;
        return (
          <table styles={styles.table} className="striped center" key={id}>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Aluno</th>
                <th style={{ width: "20%" }}>Disciplina</th>
                <th style={{ width: "20%" }}>Avaliação</th>
                <th style={{ width: "20%" }}>Nota</th>
                <th style={{ width: "20%" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(
                ({ id, student, subject, type, value, isDeleted }) => {
                  return (
                    <tr key={id}>
                      <td>{student}</td>
                      <td>{subject}</td>
                      <td>{type}</td>
                      <td>{isDeleted ? "-" : value}</td>
                      <td>
                        <div>
                          <Action
                            onActionClick={handleActionClick}
                            id={id}
                            type={isDeleted ? "add" : "edit"}
                          />
                          {!isDeleted && (
                            <Action
                              onActionClick={handleActionClick}
                              id={id}
                              type="delete"
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tfoot>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td style={{textAlign:"right"}}>Total:</td>
                <td>
                  <span style={gradeStyle}>{finalGrades}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        );
      })}
    </div>
  );
}

const styles = {
  goodGrade: {
    fontWeight: "bold",
    color: "green",
  },
  badGrade: {
    fontWeight: "bold",
    color: "red",
  },
  table: {
    margin: "20px", 
    padding: "10px",
  },
};
