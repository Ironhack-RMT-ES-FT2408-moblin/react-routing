import React from 'react'

function Profile(props) {
  return (
    <div>
      
      <h2>Aqui tu informacion de perfil</h2>

      <div>
        <h1>User id: {props.userInfo.id}</h1>
        <h3>{props.userInfo.name}</h3>
        <p>{props.userInfo.location}</p>
      </div>

    </div>
  )
}

export default Profile