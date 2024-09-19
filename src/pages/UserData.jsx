import React from 'react'

import allStudents from "../data/students.json"

import { useParams } from 'react-router-dom'

function UserData() {
  console.log(allStudents)

  // como extraemos el valor (nombre de usuario) del parametro dinamico
  // inicializamos el uso de useParams
  const parametrosDinamicos = useParams()
  console.log(parametrosDinamicos)
  console.log(parametrosDinamicos.nombreDeUsuario)

  // como podemos filtrar en el array y pintar solo la info de ese usuario
  const userToDisplay = allStudents.find((eachStudent) => {
    return eachStudent.username === parametrosDinamicos.nombreDeUsuario
  })

  // si da undefined es porque no lo consigue

  return (
    <div>
      
      <h3>Info de un usuario especifico</h3>

      {userToDisplay === undefined ? (
        <h2>No hay usuarios con ese nombre</h2>
      ) : (
      <div>
        <h3>{userToDisplay.username}</h3>
        <p>{userToDisplay.city}</p>
        <p>{userToDisplay.course}</p>
        <p>user id: {userToDisplay.id}</p>
      </div>

      )}


    </div>
  )
}

export default UserData