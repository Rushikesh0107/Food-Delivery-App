import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../../services/Operations/authAPI';

import { setsignupData } from '../../../Slices/authSlice';

const SignUpForm = () => {

    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {fullname, email, phone, username, password} = formData;

    const handleOnChange = (e)  => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
        //console.log(formData);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // Manually set the value for the file input
      };

      const handleOnSubmit =(e) => {
        e.preventDefault();

        const avatarData = {
            name: file ? file.name : '',
            size: file ? file.size : 0,
          };

        const { fullname, email, phone, username, password } = formData;

        dispatch(register(username, password, email, fullname, file, navigate));

        

        dispatch(setsignupData({ fullname, email, phone, username, password, avatarData}));
        //console.log(formData);
      }
    
  return (
    <>
    <div className='w-full flex flex-col items-center h-screen justify-center'>
        <div>
            <h1 className='font-bold text-2xl '>
                Sign Up Form
            </h1>
        </div>

        <div>
            <form 
            className='px-8 pt-6 pb-8 mb-4 w-96 flex-col flex gap-4'
            onSubmit={handleOnSubmit}
            >
                <div>
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
            required
            name='avatar'
            style={{ display: 'none' }}
            className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
            onChange={(e) => handleFileChange(e)}
          />
                </div>


                <input 
                type="text" 
                required
                name='fullname'
                value={fullname}
                placeholder='Fullname'
                onChange={handleOnChange}
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <input 
                type="text" 
                name='email'
                required
                value={email}
                onChange={handleOnChange}
                placeholder='Email'
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <input 
                type="text" 
                required
                name='phone'
                value={phone}
                onChange={handleOnChange}
                placeholder='Phone Number'
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <input 
                type="text" 
                required
                name='username'
                value={username}
                onChange={handleOnChange}
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                placeholder='Username'
                />
                <input 
                type="text" 
                required
                name='password'
                value={password}
                onChange={handleOnChange}
                placeholder='Password'
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <input 
                type="submit" 
                className='px-6 py-3 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:shadow-outline-blue'
                />
            </form>
        </div>
    </div>
    </>
  )
}

export default SignUpForm