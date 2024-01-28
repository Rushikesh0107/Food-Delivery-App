import React, { useEffect } from 'react'
import CartComponent from '../components/core/Cart/CartComponent'
import CheckoutBox from '../components/core/Cart/CheckoutBox'

const Cart = () => {

  return (
    <div className='pb-5 flex-col flex justify-between bg-gradient-to-r from-gray-100 to-green-900'
    >
      <div 
      className='overflow-y-scroll'
      style={{height: 'calc(100vh - 64px - 145px)'}}
      >
      <CartComponent />
      </div>
     

     <div
     className='pb-5'
     >
     <CheckoutBox />
     </div>
    </div>
  )
}

export default Cart