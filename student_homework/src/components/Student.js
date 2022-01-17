// import React, { useState } from 'react';
import Score from './Score';
 
function Student(props) {
    return <div>
{/* <h1>{props.score.score}</h1> */}
        {/* <h1>{ props.data.students[0]}</h1> */}


        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Bio</th>
            <th>Score</th>
            <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.student.name}</td>
              <td>{props.student.bio}</td>
             <td> {props.student.scores.map((score, index) => {
          return <Score score={score} key={index} title={index} />;
        })}</td>
            </tr>
          </tbody>
        </table>
           

        
       

        
    </div>;
  }
  export default Student;