import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/common/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoutes from './components/core/Auth/ProtectedRoutes.jsx'
import Profile from './components/core/Profile/Profile.jsx'
import SignUpForm from './components/core/Auth/SignUpForm.jsx'
import Address from './pages/Address.jsx'

function App() {

  return (
   <>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
      {/* Protected Routes */}

      <Route path="/profile" element={
        <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      } />

      <Route path="/address" element={
      <ProtectedRoutes>
        <Address />
      </ProtectedRoutes>
      } />

      </Route>
    </Routes>
   </>
  )
}

export default App
