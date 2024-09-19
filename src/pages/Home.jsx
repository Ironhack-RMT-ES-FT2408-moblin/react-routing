import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      
      <h1>Bienvenidos a mi página</h1>

      <br />
      <Link to="/conocenos/equipo">Conocenos</Link>
      <br />
      <Link to="/conocenos/location">Location</Link>

    </div>
  )
}

export default Home