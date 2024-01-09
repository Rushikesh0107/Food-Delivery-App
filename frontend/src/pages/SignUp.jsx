import React, { useState } from 'react'
import Input from '../components/Input';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

const SignUp = () => {

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    try {
      const result = await axios.post(`http://localhost:8000/api/v1/users/signup`, data)

      console.log(result);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <>
    <div className='w-full flex gap-2 flex-col items-center min-h-screen justify-center'>
    <div className=''>
        <h1 className='md:text-3xl text-2xl font-bold '>
          Sign Up to the healthy life
        </h1>
      </div>
      {error && (
        <div className='bg-red-500 text-white p-4 rounded-lg'>
          {error}
        </div>
      )}
      <form className='flex-col gap-2 flex px-8 pt-6 pb-8 mb-4 w-96'>
      <div 
      className='flex flex-col items-center gap-2 justify-center cursor-pointer'>
        <Avatar 
          alt="" 
          src=""
          sx={{ width: 68, height: 68 }}
          />
          <span>Upload Avatar</span>
      </div>
      <Input 
      type='file'
      id='avatar'
      style={{display: 'none'}}
      />
      <Input
          placeholder="Full Name"
          type="text"
          {...register("fullname", { required: true })}
          />

        <Input
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
          />

        <Input
          placeholder="Phone"
          type="number"
          {...register("email", { required: true })}
          />

        <Input
          placeholder="Username"
          type="text"
          {...register("username", { required: true })}
          />

        <Input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
          />  


        <input 
          type="submit" 
          value={'Submit'}
          className='px-4 py-2 md:px-6 md:py-2 font-bold text-lg md:text-xl rounded-lg bg-green-700 text-white'
          />
      </form>
    </div>
    </>
  )
}

export default SignUp