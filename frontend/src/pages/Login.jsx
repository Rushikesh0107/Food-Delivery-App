import React, { useState } from 'react';
import Input from '../components/Input';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const login = async (data) => {
    console.log(data);
    try {
      const result = await axios.post(`http://localhost:8000/api/v1/users/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      }
      )

      const accessToken = result.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      toast.success('Login successfully');

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div>
        <h1 className="md:text-3xl text-2xl font-bold mb-4">
          Sign In to your account
        </h1>
      </div>
      <div className="mb-4">
        <p className="text-gray-500">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-500">
            Sign Up
          </a>
        </p>
      </div>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}
      <form className="px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit(login)}>
        <div className="mb-4">
          <Input
          placeholder="Username"
          type="text"
          {...register("username", { required: true })}
          />
        </div>
        <div className="mb-6">
        <Input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
          />
        </div>
        <div className="flex items-center justify-center">
          <input 
          type="submit" 
          value={'Sign In'}
          className='px-4 py-2 md:px-6 md:py-2 font-bold text-lg md:text-xl rounded-lg bg-green-700 text-white'
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
