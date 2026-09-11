import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Shorten from "../pages/Shorten"
import ResetPassword from "../pages/ResetPassword"

function AppRoutes () {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
        <Route path='/shorten' element={<Shorten/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>
  )
}

export default AppRoutes
