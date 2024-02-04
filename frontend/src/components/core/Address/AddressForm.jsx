import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addAddress} from '../../../services/Operations/addressAPI.js'
import {setAddress} from '../../../Slices/addressSlice'

const AddressForm = () => {

  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    deliveryInstructions: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addressLine1, addressLine2, city, state, pincode, deliveryInstructions } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    //console.log(formData);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addAddress(addressLine1, addressLine2, city, state, pincode, deliveryInstructions, navigate))

    dispatch(setAddress(addressLine1, addressLine2, city, state, pincode, deliveryInstructions))
  }


  return (
    <>
    <div className='min-h-screen flex items-center justify-center flex-col'>
      <div className=''>
        <h1 className='md:text-3xl text-2xl font-bold mb-4'>
          Add the way towards healthy life
        </h1>
      </div>

      <form
      className='px-8 pt-6 pb-8 mb-4 w-96 flex-col flex gap-4'
      onSubmit={handleOnSubmit}
      >
        <input 
        type="text"
        required
        name='addressLine1'
        value={addressLine1}
        onChange={handleOnChange}
        placeholder='Address Line 1'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />

        <input
        type="text"
        name='addressLine2'
        value={addressLine2}
        onChange={handleOnChange}
        placeholder='Address Line 2'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />

        <input
        type="text"
        required
        name='city'
        value={city}
        onChange={handleOnChange}
        placeholder='City'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />

        <input
        type="text"
        required
        name='state'
        value={state}
        onChange={handleOnChange}
        placeholder='State'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />


        <input
        type="number"
        required
        name='pincode'
        value={pincode}
        onChange={handleOnChange}
        placeholder='Pincode'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />

        <input
        type="text"
        name='deliveryInstructions'
        value={deliveryInstructions}
        onChange={handleOnChange}
        placeholder='Delivery Instructions'
        className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
        />

        <div className='flex justify-center'>
          <button
          type="submit"
          className='px-6 py-3 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:shadow-outline-blue'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddressForm