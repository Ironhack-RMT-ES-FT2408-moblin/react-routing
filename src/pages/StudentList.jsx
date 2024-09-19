import React from 'react'

import allStudents from "../data/students.json"
import { Link } from 'react-router-dom'

function StudentList() {
  return (
    <div>
      
      <h3>Aqui la lista con todos los nombres de estudiantes</h3>

      <ul>
        {allStudents.map((eachStudent) => {
          return (
            <li key={eachStudent.id}>
              <Link to={`/user/${eachStudent.username}`}>{eachStudent.username}</Link>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default StudentList