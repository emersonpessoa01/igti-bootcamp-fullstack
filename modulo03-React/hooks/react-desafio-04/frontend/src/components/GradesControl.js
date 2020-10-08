import React from "react";

export default function GradesControl({ grades, onDelete, onPersist }) {
  // return <div>Grades Control</div>;
  // return <div>{JSON.stringify(grades)}</div>;
  return (
    <div className='container'>
      <table className="striped">
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
          {grades.map(({id, subject, student, type, value, idDeleted}) =>{
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
    </div>
  );
}
