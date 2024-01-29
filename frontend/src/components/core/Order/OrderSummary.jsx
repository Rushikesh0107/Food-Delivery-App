import React from 'react'

const OrderSummary = () => {
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []


  return (
    <div
    className='bg-gradient-to-r from-gray-100 to-green-900'
    style={{height: 'calc(100vh - 64px)'}}
    >
        <div
        className='w-full h-full flex justify-center items-start'

        >
          <div
          className='pt-20 flex flex-col justify-center items-center w-full'
          >
            <h1
            className='text-3xl font-bold text-gray-800'
            >
              Order Summary
            </h1>


            <div
            className='w-full  flex flex-col justify-between items-center '
            >
              {
                cart.map((item, index) => (
                  <div
                  key={index}
                  className='flex justify-between items-center w-2/3 border-b border-gray-300 py-2'
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
                        {item.name}
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderSummary