import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Register from '../contact/Register'
import HomePage from '../../HomePage'
import About from '../components/About'
import Contacts from '../contact/Contacts'


const Routers = () => {
  return (
    
    <Routes>

      <Route path='/' element={<HomePage />} />
       <Route path="/register" element={<Register/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contacts/>} />

       
    </Routes>
    
  )
}

export default Routers
