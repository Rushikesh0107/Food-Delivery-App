import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  return (
    <>
    <div className='h-screen flex flex-col items-center justify-center'>
        <div>
            <h1 
            className='mb-4 text-center font-bold text-2xl'>Login</h1>
        </div>
        <form
        className='flex flex-col justify-center items-center'
        >
            <Input 
            placeholder = "Email / Username"
            type = "text"
            className = "mb-4"
            />

            <Input 
            type = "text"
            placeholder = "Password"
            className = ""
            />

            <Button
            className='mt-4 active:bg-green-500'
            >
                Login
            </Button>
        </form>
    </div>
    </>
  )
}

export default Login