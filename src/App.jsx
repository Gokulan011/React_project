import { useState } from 'react'
import './App.css'
import  './cssfiles/Navbar.css'
import Navbar from './navpages/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './navpages/About'
import Services from './navpages/Services'
import Login from './navpages/Login'
import Home from './navpages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
