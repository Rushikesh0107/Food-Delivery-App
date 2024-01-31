import React from 'react'
import {motion} from 'framer-motion'

const PlaceOrder = () => {

    const total = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : []

    const address = localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : ""
  return (

    <div
    className='w-full h-full flex md:w-1/2 mx-auto'
    >
        <motion.div
        className='flex py-5 px-5 flex-col w-[90%] bg-white justify-center items-center mx-auto my-10 rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0 }}
        transition={{duration: 1}}
        >

            <div
            className='flex-col md:flex-row  flex justify-center items-center md:items-start md:justify-start md:px-10'
            >

                <div
                className='flex flex-col justify-center items-center md:items-start md:justify-start md:px-10'
                >
                    <p
                    className='text-xl font-semibold text-gray-800'
                    >
                        Address: <span>{address?.addressLine1}</span><br/>
                        <span>{address?.addressLine2}</span><br/>
                        <span>{address?.city}</span><br/>
                        <span>{address?.state}</span><br/>
                        <span>{address?.pincode}</span>
                    </p>
                </div>
                <div>
                    <h1
                    className='text-3xl font-bold text-gray-800 '
                    >
                        Total: {total}
                    </h1>
                </div>
            </div>


            <div>
                <button
                className='bg-green-500 text-white px-5 py-2 rounded-xl font-semibold text-xl mt-7'
                >
                    Place Order
                </button>
            </div>
        </motion.div>
    </div>
  )
}

export default PlaceOrder