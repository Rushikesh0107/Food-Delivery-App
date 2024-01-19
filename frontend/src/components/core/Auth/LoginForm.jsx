import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/Operations/authAPI';

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fromData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = fromData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    console.log(fromData);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password, navigate))
  }

  return (
    <div className='flex flex-col items-center mx-auto justify-center bg-gray-100 p-4 md:p-8 lg:p-12 h-screen'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold'>
          Login Form
        </h1>
      </div>

      <div className='mb-4'>
        <span>
          Don't have an account? 
          <Link to="/signup" className='text-green-500 font-semibold ml-1'>
            Sign Up
          </Link>
        </span>
      </div>

      <form 
      className='flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2 '
      onSubmit={handleOnSubmit}
      >
        <div className='flex justify-center'>
          <input
            type="text"
            required
            name='username'
            value={username}
            placeholder='Username'
            className='p-3 border rounded-md focus:outline-none focus:border-blue-500'
            onChange={handleOnChange}
          />
        </div>

        <div className='flex justify-center'>
          <input
            type="password"
            required
            name='password'
            value={password}
            placeholder='Password'
            className='p-3 border rounded-md focus:outline-none focus:border-blue-500'
            onChange={handleOnChange}
          />
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className='px-6 py-3 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:shadow-outline-blue'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
