import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Hearder.jsx'
import Footer from './Footer/Footer.jsx'

const Layout = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Header />
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Layout