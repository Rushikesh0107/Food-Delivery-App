import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Login />} />
    </Routes>
   </>
  )
}

export default App
