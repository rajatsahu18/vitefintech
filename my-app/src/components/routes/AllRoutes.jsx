import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Content/Home'
import { Login } from '../login/Login'
import { Signup } from '../signup/Signup'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/home' element={<Home/>} />
        </Routes>
    </div>
  )
}