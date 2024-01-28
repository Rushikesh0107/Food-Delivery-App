import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const CheckoutBox = () => {

    let total = useSelector((state) => state.cart.total)
    const navigate = useNavigate() 

    useEffect(() => {
        total = localStorage.getItem('total')
    }, [total])

    const handleCheckout = () => {
        //console.log('checkout');
        navigate("/checkout")
    }
    
    return (
        <div 
        className='w-full'>
            <div className='flex flex-col items-center justify-center md:w-1/2 mt-4 md:mx-auto'>
                <div 
                style={{ width: "95%"}}
                className='bg-white p-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className='text-xl text-center font-semibold mb-2'>Checkout</h1>
                    <div className='flex justify-around'>
                        <h1 className='text-xl font-semibold mb-2'>Total</h1>
                        <h1 className='text-xl font-semibold mb-2'>${total}</h1>
                    </div>
                    <div
                    className='w-full flex justify-center items-center'
                    >
                    <button
                    className='bg-green-500 text-white px-2 py-1 rounded-lg w-1/2 md:w-1/4'
                    onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutBox