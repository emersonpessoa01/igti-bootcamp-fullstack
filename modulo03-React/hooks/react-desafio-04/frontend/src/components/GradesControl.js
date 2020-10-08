import React from "react";
import css from "./spinner.module.css";

export default function GradesControl({ grades, onDelete, onPersist }) {

   const tableGrades = [];

   let currentStudent = grades[0].student;
   let currentSubject = grades[0].subject;
   let currentGrades = [];

   let id = 1;

   grades.forEach(grade =>{
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
     currentGrades.push(grade);
   })

   //aós loop devemos inserir
   // o ultimo elemento 

   tableGrades.push({
     id: id++,
     student: currentStudent,
     subject: currentSubject,
     grades: currentGrades, 
   })

   console.log(tableGrades)


  return (
    // <div className={css.notes}>
    //   {JSON.stringify(grades)}
    // </div>
    <div className="center">
      {tableGrades.map(tableGrade=>{
        return (
          <table className="striped">
        <thead className={css.notes}>
          <tr>
            <th>Aluno</th>
            <th>Disciplina</th>
            <th>Avaliação</th>
            <th>Notas</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody className={css.notes}>
          {tableGrade.grades.map(({id, subject, student,type,value, isDeleted}) =>{
            return(
              <tr key={id}>
                  <td>{student}</td>
                  <td>{subject}</td>
                  <td>{type}</td>
                  <td>{value}</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>

        </tfoot>
      </table>
        )
      })}
      
    </div>
  );
}
