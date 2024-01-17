import React from 'react'
import NavBar from './NavBar'
import isLoggedin from '../../Core/Auth/isLoggedIn'
import { Link } from 'react-router-dom'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const Hearder = () => {

  const {signupData} = useSelector(state => state.auth)
  console.log(signupData);
  //const file = signupData.avatar
  return (
    <>
    {
      isLoggedin() ? (
        <>
        <div className='bg-green-700 p-5 text-white font-bold text-xl'>
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
              {/* <Avatar
                src={file ? URL.createObjectURL(file) : ''}
                alt="Avatar"
                style={{ width: '100px', height: '100px' }}
              /> */}
              </li>
            </ul>
          </div>
        </div>
      </>
      ) : (<NavBar />)
    }
    </>
  )
}

export default Hearder