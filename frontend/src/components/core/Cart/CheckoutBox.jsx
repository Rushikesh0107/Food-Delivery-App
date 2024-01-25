import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

const CheckoutBox = () => {


    let total = useSelector((state) => state.cart.total)

    useEffect(() => {
        total = localStorage.getItem('total')
    }, [total])
    
    return (
        <div 
        className=''>
            <div className='flex justify-center mt-4 '>
                <div 
                style={{ width: "95%"}}
                className='bg-white p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className='text-xl font-semibold mb-2'>Checkout</h1>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold mb-2'>Total</h1>
                        <h1 className='text-xl font-semibold mb-2'>${total}</h1>
                    </div>
                    <button
                    className='bg-green-500 text-white px-2 py-1 rounded-lg w-full'
                    onClick={() => {}}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBox