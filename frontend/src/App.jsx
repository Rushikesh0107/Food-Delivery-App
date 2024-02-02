import './App.css'

import {Routes, Route} from 'react-router-dom'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

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
import AdminLogin from './pages/AdminLogin.jsx'
import Order from './pages/Order.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import ProfileEdit from './pages/ProfileEdit.jsx'
import Logout from './pages/Logout.jsx'

import {useSelector} from 'react-redux' 
import Checkout from './pages/Checkout.jsx'

function App() {

  const {user} = useSelector(state => state.profile)
  //console.log(user);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  useEffect(() => {
    scrollTo(0, 0);
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
        <Route path="/store" element={<Store />} />
        <Route path="/admin-login" element={<AdminLogin />} />
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


        
        <Route path='/cart' element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        }/>

        <Route path='/checkout' element={
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        }/>

        <Route path='/profile/edit' element={
          <ProtectedRoutes>
            <ProfileEdit />
          </ProtectedRoutes>
        }/>

        <Route path='/logout' element={
          <ProtectedRoutes>
            <Logout />
          </ProtectedRoutes>
        }/>

        <Route path='/order' element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        }/>

        {/* Page Not Found (404 Page ) */}
        <Route path="*" element={<PageNotFound />} />

      </Route>


      {/* ADMIN ROUTES  */}
        
      <Route path='/admin-dashboard' element={
          <ProtectedRoutes>
          <AdminDashboard />
        </ProtectedRoutes>
      } />

    </Routes>
   </>
  )
}

export default App
