import React from 'react'
import {motion} from 'framer-motion'

const OrderSummary = () => {
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []


  return (
    <div
    className=''
    >
        <div
        className='w-full h-full flex justify-center items-start md:w-1/2 mx-auto'

        >
          <div
          className='pt-20 flex flex-col justify-center items-center w-full'
          >
            <h1
            className='mb-10 text-3xl font-bold text-gray-800'
            >
              Order Summary
            </h1>


            <motion.div
            className='w-[90%] flex flex-col justify-between items-center bg-white rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 1}}
            >
              {
                cart.map((item, index) => (
                  <div
                  key={index}
                  className='flex justify-between items-center w-3/4 border-b border-gray-300 py-2'
                  >
                    <div
                    className='flex justify-center items-center rounded-xl'
                    >
                      <img
                      src={item.foodImage}
                      alt={item.name}
                      className='w-20 h-20 object-contain'
                      />
                    </div>
                    <div
                    className='flex flex-col justify-center items-start font-bold text-xl'
                    >
                      <p
                      className='text-gray-800'
                      >
                        {item.title}
                      </p>
                      <p
                      className='text-gray-800'
                      >
                        {item.price}
                      </p>
                    </div>
                    <div
                    className='flex justify-center items-center text-xl font-bold'
                    >
                      <p
                      className='text-gray-800'
                      >
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                ))
              }
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default OrderSummary