import React from 'react'

import allStudents from "../data/students.json"
import { Link, useSearchParams } from 'react-router-dom'

function StudentList() {

  const [ queries, setQueries ] = useSearchParams()

  const courseQuery = queries.get("course")
  console.log(courseQuery)

  // const filteredStudents = allStudents.filter((eachStudent) => {
  //   return eachStudent.course === courseQuery
  // })

  const handleSelect = (event) => {
    console.log("selecionando un valor diferente", event.target.value)
    if (event.target.value === "") {
      setQueries() // remueve todos los queries
    } else {
      setQueries({course: event.target.value})
    }
  }

  return (
    <div>
      
      <h3>Aqui la lista con todos los nombres de estudiantes</h3>

      <select onChange={ handleSelect }>

        <option value="">todos</option>
        <option value="ux">UX</option>
        <option value="web">WEB</option>
        <option value="data">DATA</option>

      </select>

      <ul>
        {
          allStudents
          .filter((eachStudent) => {
            if (courseQuery === "") {
              // no hay ningun query
              return true
            } else {
              // filtro normal por query
              return eachStudent.course === courseQuery
            }
          })
          .map((eachStudent) => {
            return (
              <li key={eachStudent.id}>
                <Link to={`/user/${eachStudent.username}`}>{eachStudent.username} - {eachStudent.course}</Link>
              </li>
            )
          })}
      </ul>

    </div>
  )
}

export default StudentList