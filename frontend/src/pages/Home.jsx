import React from 'react'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()

  const handleClick = async () => {

    const result = await axios.get('http://localhost:8000/api/v1/users/logout',
    {
      headers: {
        "authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
    }
    )

    if(result.status !== 200) {
      throw new Error('Could not logout user')
    } else {
      toast.success('Logout successfully')
    }

    localStorage.removeItem('accessToken')
    window.location.reload()

    navigate("/login")
  
  }

  return (
    <div
    className='w-full min-h-screen flex items-center justify-center flex-col'
    >
      <Button onClick={handleClick}>
        Logout
      </Button>
    </div>
  )
}

export default Home