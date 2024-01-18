import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/common/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Login />} />
      </Route>
    </Routes>
   </>
  )
}

export default App
