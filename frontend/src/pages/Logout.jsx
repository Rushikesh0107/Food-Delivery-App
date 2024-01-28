import React from 'react'
import { logout } from '../services/Operations/authAPI'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem('accessToken')
  return (
    <div
    className='bg-gradient-to-r from-gray-100 to-green-900 flex items-center justify-center'
    style={{height: 'calc(100vh - 64px)'}}
    >
        <button
        className='bg-red-500 px-4 py-2 rounded-md text-white font-semibold'
        onClick={() => dispatch(logout(token, navigate))}
        >
            Logout
        </button>
    </div>
  )
}

export default Logout