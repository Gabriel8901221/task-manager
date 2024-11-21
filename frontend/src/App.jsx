import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
