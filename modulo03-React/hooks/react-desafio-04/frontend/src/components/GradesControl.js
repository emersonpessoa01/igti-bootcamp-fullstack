import React from "react";

export default function GradesControl({ grades, onDelete, onPersist }) {
  // return <div>Grades Control</div>;
  // return <div>{JSON.stringify(grades)}</div>;
  const tableGrades = [];

  let currentStudent = grades[0].student;
  let currentSubject = grades[0].subject;
  let currentGrades = [];
  let id = 1;
  
  grades.forEach(grade => {
    if(grade.subject !== currentSubject){
      tableGrades.push({
        id: id++,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrades,

      })

      currentSubject = grade.subject;
      currentGrades = [];
    }

    if(grade.student !== currentStudent){
      currentStudent = grade.student;
    }

    currentGrades.push(grade);
  })

  //apos o loop devemos inserir o
  //o ultimo elemento
  tableGrades.push({
    id: id++,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrades,

  })

  console.log(tableGrades)

  return (
    <div className='container'>
      {tableGrades.map(tableGrade=>{
      return (
        <table className="striped" key={tableGrade.id}>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Disciplina</th>
            <th>Avaliação</th>
            <th>Notas</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tableGrade.grades.map(({id, subject, student, type, value, idDeleted}) =>{
            return (
              <tr key={id}>
              <td>{subject}</td>
              <td>{student}</td>
              <td>{type}</td>
              <td>{value}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            )
          })}
        </tbody>
        <tfoot></tfoot>
      </table>

      )
      })}
          </div>
  );
}
