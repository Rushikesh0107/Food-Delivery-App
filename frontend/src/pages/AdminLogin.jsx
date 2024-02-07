import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { adminLogin } from '../services/Operations/adminAPI'
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {
  const [formData, setformData] = useState({
    username: "",
    password: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {username, password} = formData

  const handleOnChange = (e) => {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(adminLogin(username, password, navigate))
  }

  return (
    <div
    className='flex flex-col justify-center items-center'
    style={{height: 'calc(100vh - 64px)'}}
    >
        <div
        className='flex flex-col justify-center items-center gap-4'
        >
          <h1
          className='font-bold text-2xl md:text-3xl '
          >
            Admin Login
          </h1>
          <div
          className=''
          >
            <form
            className='flex flex-col justify-center items-center gap-4'
            onSubmit={handleOnSubmit}
            >
            <input 
            type="password" 
            required
            value={username}
            name='username'
            onChange={handleOnChange}
            placeholder='username'
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            />

            <input 
            type="password" 
            required
            value={password}
            name='password'
            placeholder='password'
            onChange={handleOnChange}
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            />

            <input 
            type="submit" 
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center'
            />
            </form>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin