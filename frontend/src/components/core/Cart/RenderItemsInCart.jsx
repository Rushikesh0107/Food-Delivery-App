import React, {useEffect, useState} from 'react'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../../Slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const RenderItemsInCart = () => {

    
    let cart = JSON.parse(localStorage.getItem('cart'))
    const dispatch = useDispatch()
    const total = useSelector((state) => state.cart.total)

    useEffect(() => {
        cart = JSON.parse(localStorage.getItem('cart'))
    }, [total])

    //console.log(cart?.length);

    //console.log(cart[0]);
  return (
    <>
    
    {(cart?.length === 0 || cart?.length == undefined) && (
    <div
    className='w-full h-60 flex justify-center items-center md:w-'
    >
    <h1
    className='text-3xl font-semibold text-gray-400 tracking-widest '
    >
        Cart is Empty
        </h1>
    </div>
    )}
    <div
    className='md:flex-col md:w-1/2 md:mx-auto md:items-center md:justify-center'
    >
    {cart?.map((item) => {
        return (
            <div 
            key={item._id} 
            className='bg-white p-4 mt-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto'
            style={{ width: "95%",}}
            >
                <div className='flex'>
                    <div className='w-60 h-32'>
                        <img src={item.foodImage} alt={item.title} className='rounded-lg w-full h-full object-contain' />
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
                    className='flex flex-col justify-between items-center w-1/3 md:justify-evenly'
                    >
                        <h3>
                            Quatntity
                        </h3>
                        <div
                        className='flex justify-around items-center w-full'
                        >
                            <button
                            className='bg-red-500 text-white px-2 py-1 rounded-lg'
                            onClick={() => dispatch(decreaseQuantity(item))}
                            >
                                -
                            </button>
                            
                            <p>
                                {item.quantity} 
                            </p>

                            <button
                            className='bg-green-500 text-white px-2 py-1 rounded-lg'
                            onClick={() => dispatch(increaseQuantity(item))}
                            >
                                +
                            </button>
                        </div>
                        <button
                        className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 shadow-md'
                        onClick={() => dispatch(removeFromCart(item))}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    })}
    </div>
    </>

  )
}

export default RenderItemsInCart