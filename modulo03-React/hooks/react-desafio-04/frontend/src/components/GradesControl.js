import React from "react";
import css from "./spinner.module.css";

export default function GradesControl({ grades, onDelete, onPersist }) {
  return (
    // <div className={css.notes}>
    //   {JSON.stringify(grades)}
    // </div>
    <div>
      <table className="stripped">
        <thead className={css.notes}>
          <tr>
            <th>Aluno</th>
            <th>Disciplina</th>
            <th>Avaliação</th>
            <th>Nota</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {grades.map(({ student, subject, type, value, isDeleted }) => {
            return (
              <tr className={css.notes}>
                <td>{student}</td>
                <td>{subject}</td>
                <td>{type}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
