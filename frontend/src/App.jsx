import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import Address from './pages/Address.jsx'
import About from './pages/About.jsx'
import ProtectedRoute from './components/Core/Auth/ProtectedRoute.jsx'
import OpenRoute from './components/Core/Auth/OpenRoute.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path='login' element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />

        <Route path='signup' element={
          <OpenRoute>
            <SignUp />
          </OpenRoute>
        } />
      </Route>

      <Route path='address' element={
      <ProtectedRoute>
        <Address />
      </ProtectedRoute>} />
    </Routes>
  );
}

export default App
