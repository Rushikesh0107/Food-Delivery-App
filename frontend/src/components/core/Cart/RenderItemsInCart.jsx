import React from 'react'

const RenderItemsInCart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))

    //console.log(cart[0]);
  return (
    <div>
    {cart.map((item) => {
        return (
            <div key={item._id} className='bg-white p-4 mt-4 mb-4 rounded-lg shadow-md'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img src={item.foodImage} alt={item.title} className='rounded-lg w-full' />
                    </div>
                    <div className='w-2/3 pl-4'>
                        <h1 className='text-xl font-semibold mb-2'>{item.title}</h1>
                        <p className='text-gray-600'>{item.description}</p>
                        <div className='mt-2 flex items-center'>
                            <span className='text-green-500 font-semibold mr-2'>${item.price}</span>
                            {/* Add quantity or any other information here */}
                        </div>
                    </div>
                    <div
                    className='flex flex-col justify-between items-center w-1/3'
                    >
                        <h3>
                            Quatntity
                        </h3>
                        <p>
                            {item.quantity} 
                        </p>
                        <button
                        className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 shadow-md'
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    })}
</div>

  )
}

export default RenderItemsInCart