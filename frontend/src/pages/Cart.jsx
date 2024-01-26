import React, { useEffect } from 'react'
import CartComponent from '../components/core/Cart/CartComponent'
import CheckoutBox from '../components/core/Cart/CheckoutBox'

const Cart = () => {

  return (
    <div className='mb-5 h- flex-col flex justify-between'>
      <div 
      className='overflow-y-scroll'
      style={{height: 'calc(100vh - 64px - 160px)'}}
      >
      <CartComponent />
      </div>
     

     <div>
     <CheckoutBox />
     </div>
    </div>
  )
}

export default Cart