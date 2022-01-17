// import React, { useState } from 'react';
import Score from "./Score";

function Student(props) {
  return (
    <tbody>
      <tr>
        <td>{props.student.name}</td>
        <td>{props.student.bio}</td>
        {props.student.scores.map((score, index) => {
          return <Score score={score} key={index} title={index} />;
        })}
      </tr>
    </tbody>
  );
}
export default Student;
