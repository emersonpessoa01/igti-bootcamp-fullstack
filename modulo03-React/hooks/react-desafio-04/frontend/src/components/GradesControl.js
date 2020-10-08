import React from "react";
import Actions from "./Actions";
import css from "./spinner.module.css";

export default function GradesControl({ grades, onDelete, onPersist }) {
  // return <div>Grades Control</div>;
  // return <div>{JSON.stringify(grades)}</div>;
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

  //apos o loop devemos inserir o
  //o ultimo elemento
  tableGrades.push({
    id: id++,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrades,
  });

  console.log(tableGrades);

  const handleActionClick = (id, type) => {
    console.log(id);
    console.log(type);
  };

  return (
    <div className={css.notes}>
      <div className="container">
        {tableGrades.map(({ id, grades }) => {
          return (
            <table className="responsive-table" key={id}>
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Aluno</th>
                  <th style={{ width: "20%" }}>Disciplina</th>
                  <th style={{ width: "20%" }}>Avaliação</th>
                  <th style={{ width: "20%" }}>Notas</th>
                  <th style={{ width: "20%" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {grades.map(
                  ({ id, subject, student, type, value, isDeleted }) => {
                    return (
                      <tr key={id}>
                        <td>{student}</td>
                        <td>{subject}</td>
                        <td>{type}</td>
                        <td>{isDeleted ? "-" : value}</td>
                        <td >
                          <div>
                            <span>
                            <Actions
                              onActionClick={handleActionClick}
                              id={id}
                              type={isDeleted ? "add" : "edit"}
                            />
                            </span>
                            
                            <span>
                            {!isDeleted && (
                              <Actions
                                onActionClick={handleActionClick}
                                id={id}
                                type="delete"
                              />
                            )}
                            </span>
                            
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
              <tfoot></tfoot>
            </table>
          );
        })}
      </div>
    </div>
  );
}

