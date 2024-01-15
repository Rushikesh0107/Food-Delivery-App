import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Address = () => {

  const {register, handleSubmit} = useForm();
  const [error, setError] =  useState("")
  const navigate = useNavigate()

  console.log(document.cookie);

  const addAddress = async (data) => {
    
    try {
      console.log(data);
      const result = await axios.post(`http://localhost:8000/api/v1/address/add-address`, 
      data,
      {
        headers: {
        "Content-Type": "application/json; charset=utf-8",
        }
      }
      )

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
    }
  }

  return (
    <>
    <div className='w-full min-h-screen flex items-center justify-center flex-col'>
      <div className='w-full'>
        <h1 className='text-center md:text-3xl text-2xl font-semibold '>
          Meal to be delivered at
        </h1>
      </div>
      <form 
      className="px-8 pt-6 pb-8 mb-4 w-96" 
      onSubmit={handleSubmit(addAddress)}>
        <div className="mb-4">
          <Input
          placeholder="Address Line 1"
          type="text"
          {...register("addressLine1", { required: true })}
          />
        </div>
        <div className="mb-4">
        <Input
          placeholder="Address Line 2 (optional)"
          type="text"
          {...register("addressLine2", { required: false })}
          />
        </div>

        <div className="mb-4">
        <Input
          placeholder="City"
          type="text"
          {...register("city", { required: true })}
          />
        </div>

        <div className="mb-4">
        <Input
          placeholder="State"
          type="text"
          {...register("state", { required: true })}
          />
        </div>

        <div className="mb-4">
        <Input
          placeholder="Pincode"
          type="text"
          {...register("pincode", { required: true })}
          />
        </div>

        <div className="mb-6">
        <Input
          placeholder="Delivery Instructions (optional)"
          type="text"
          {...register("deliveryInstruction", { required: false })}
          />
        </div>
        <div className="flex items-center justify-center">
          <input 
          type="submit" 
          value={'Submit'}
          className='px-4 py-2 md:px-6 md:py-2 font-bold text-lg md:text-xl rounded-lg bg-green-700 text-white'
          />
        </div>
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

export default Address