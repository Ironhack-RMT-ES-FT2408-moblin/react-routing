import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/conocenos/equipo">Conocenos</Link>
      <br />
      <Link to="/conocenos/location">Location</Link>
      <br />
      <Link to="/profile">Mi perfil</Link>
      <br />
      <Link to="/all-users">Ver todos los usuarios</Link>

      {/* EN REACT NUNCA DEBEMOS USAR etiquetas a para redirecciones o navegacion interna */}
    </nav>
  )
}

export default Navbar