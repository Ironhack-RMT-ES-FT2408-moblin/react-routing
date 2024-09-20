import './App.css'
import About from './pages/About'
import Home from './pages/Home'

import { Routes, Route, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Location from './pages/Location'
import { useState } from 'react'
import Profile from './pages/Profile'
import StudentList from './pages/StudentList'
import UserData from './pages/UserData'
import Navbar from "./components/Navbar"

// App va a funcionar como un organizador de páginas
function App() {

  const [ userInfo, setUserInfo ] = useState({ name: "bob", location: "barcelona", id: "1234" })

  return (
    <>

    <Navbar />
    
    <Routes>

      {/* Esto funcionar como un condicional */}
      <Route path={"/"} element={ <Home /> }/>
      <Route path={"/conocenos/equipo"} element={ <About /> }/>
      <Route path={"/conocenos/location"} element={ <Location /> }/>
      <Route path={"/profile"} element={ <Profile userInfo={userInfo}/> }/>

      {/* pueden pasar el objeto con spread para que pase las propiedades esparcidas */}
      {/* <Route path={"/profile"} element={ <Profile {...userInfo} /> }/> */}

      <Route path={"/all-users"} element={ <StudentList /> }/>

      {/* // parametros dinamicos es una variable que capta CUALQUIER valor posible en ese lugar del path. Le asigamos el nombre al parametro dinamico AQUI */}
      <Route path={"/user/:nombreDeUsuario"} element={ <UserData /> }  />

      {/* gestores de errores */}
      <Route path={"*"} element={ <NotFound /> }/>

    </Routes>
    

    </>
  )
}

export default App
