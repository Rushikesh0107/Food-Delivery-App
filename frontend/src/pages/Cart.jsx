import React, { useEffect } from 'react'
import CartComponent from '../components/core/Cart/CartComponent'
import CheckoutBox from '../components/core/Cart/CheckoutBox'

const Cart = () => {

  return (
    <div className='mb-5 h- flex-col flex justify-between'>
      <div className='overflow-y-scroll'>
      <CartComponent />
      </div>
     

     <div>
     <CheckoutBox />
     </div>
    </div>
  )
}

export default Cart