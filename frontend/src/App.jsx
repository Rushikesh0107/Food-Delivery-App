import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import Address from './pages/Address.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path="/login" element={< Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/address" element={<Address />}/>
      </Route>
      </Routes>
    </Router>
  )
}

export default App
