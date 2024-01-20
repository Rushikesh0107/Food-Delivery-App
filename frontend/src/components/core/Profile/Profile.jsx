import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout} from '../../../services/Operations/authAPI'

const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = localStorage.getItem('accessToken');

    const handleClick = () => {
        dispatch(logout(token, navigate))
    }
  return (
    <>
    <div className='w-full flex justify-center items-center h-screen'>
        <button 
        className='bg-red-500 px-4 py-2 rounded-full text-white font-bold text-xl'
        onClick={handleClick}
        >
            Logout
        </button>
    </div>
    </>
  )
}

export default Profile