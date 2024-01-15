import React, { useState } from 'react'
import Input from '../components/Input';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const { register, handleSubmit, setValue } = useForm();
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setValue("avatar", selectedFile); 
    // Manually set the value for the file input
  };

  const signup = async (data) => {
    try {
      //console.log(data);
      const result = await axios.post(`http://localhost:8000/api/v1/users/register`, 
      data,
      {
        headers: {
        "Content-Type": "multipart/form-data",
        }
      },
      )

      const refreshToken = result.data.refreshToken;
      const accessToken = result.data.accessToken;

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      //console.log(result);
      navigate('/address');
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
      <form 
      className='flex-col gap-2 flex px-8 pt-6 pb-8 mb-4 w-96'
      onSubmit={handleSubmit(signup)}
      >
      <label htmlFor="avatar" className='cursor-pointer'>
            <div className='flex flex-col items-center gap-2 justify-center'>
              <Avatar
                src={file ? URL.createObjectURL(file) : ''}
                alt="Avatar"
                style={{ width: '100px', height: '100px' }}
              />
              <span>Upload Avatar</span>
            </div>
          </label>
          <input
            type='file'
            id='avatar'
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e)}
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

        {/* <Input
          placeholder="Phone"
          type="number"
          {...register("email", { required: true })}
          /> */}

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
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}
    </div>
    </>
  )
}

export default SignUp