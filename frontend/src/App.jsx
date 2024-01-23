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
import Store from "./pages/Store.jsx"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'

function App() {

  return (
   <>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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

        <Route path="/store" element={
        <ProtectedRoutes>
          <Store />
        </ProtectedRoutes>  
        } />

        <Route path='/cart' element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        } />

      </Route>
    </Routes>
   </>
  )
}

export default App
