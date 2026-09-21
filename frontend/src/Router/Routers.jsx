import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Register from '../contact/Register'
import HomePage from '../../HomePage'


const Routers = () => {
  return (
    
    <Routes>

      <Route path='/' element={<HomePage />} />
       <Route path="/register" element={<Register/>} />
       
    </Routes>
    
  )
}

export default Routers