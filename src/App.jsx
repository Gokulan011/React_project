import { useState } from 'react'
import './App.css'
import Navbar from './navpages/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './navpages/About'
import Services from './navpages/Services'
import Login from './navpages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
