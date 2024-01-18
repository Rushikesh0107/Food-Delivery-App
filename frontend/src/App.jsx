import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import Address from './pages/Address.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/address' element={<Address />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App
