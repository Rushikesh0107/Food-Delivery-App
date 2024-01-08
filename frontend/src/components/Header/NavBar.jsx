import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const NavBar = () => {
  const [menu, setMenu] = React.useState(false)
  return (
    <>
      <div className='bg-green-700 p-4 text-white font-bold text-xl'>
        <div className='flex justify-between'>
          <Link to="/">
            <RestaurantMenuIcon />
          </Link>

          <ul className='flex gap-3'>
            <li className='hover:text-yellow-500'>
              <Link to="/about">
                About
              </Link>
            </li>
            <li className='hover:text-yellow-500'>
              <Link to="/login">
              Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menu && (
        <MenuIcon />
      )}
    </>
  )
}

export default NavBar