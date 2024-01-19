import React, {useState} from 'react';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isLoggedin, setIsLoggedin] = useState(true)

  const token = localStorage.getItem('accessToken')

  if(!token){
    setIsLoggedin(false)
  }

  return (
    <div className='w-full bg-gradient-to-r from-green-600 to-green-800 h-16 flex items-center px-6 justify-between'>
      <div>
        <RestaurantMenuIcon
          style={{ width: '45px', height: '45px', color: 'white' }}
        />
      </div>

      <div className="flex items-center space-x-4">
        {isLoggedin ? (
        <>
        <Avatar 
         alt="User Avatar"
         src="/path/to/your/image.jpg" // Add the path to the user's profile image
         sx={{
           width: 45,
           height: 45,
           border: '2px solid #4CAF50',
         }}
        />
        </>
        ) : (
        <>
        <Link to='/login'>
          <div className='text-white font-semibold text-xl bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 px-6 py-1 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300'>
          <span>Login</span>
          </div>
        </Link>
        </>
        )}
      </div>
    </div>
  );
};

export default Header;
