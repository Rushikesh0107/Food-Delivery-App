import React from 'react'

const OrderCard = ({item}) => {
    
  return (
    <div>
        <div
        className='bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3'
        >
            <div
            className='flex justify-between items-center'
            >
            <div
            className='flex gap-2'
            >
                <div
                className='bg-gray-300 w-16 h-16 rounded-lg'
                >
                    <img 
                    src={item?.foodImage}
                    alt='food image'
                    className='w-full h-full object-cover rounded-lg'
                    />
                </div>
                <div
                className='flex flex-col gap-1'
                >
                <div
                className='text-lg font-bold'
                >
                    {item?.title}
                </div>
                </div>
            </div>
            <div
            className='flex flex-col gap-1'
            >
                <div
                className='text-lg font-bold text-center'
                >
                    ₹{item?.price}
                </div>
                <div
                className='text-sm'
                >
                Quantity: {item?.quantity}
                </div>
            </div>
            </div>
            <div
            className='flex justify-end'
            >
            </div>
        </div>
    </div>
  )
}

export default OrderCard