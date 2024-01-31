import React from 'react'
import OrderSummary from '../components/core/Order/OrderSummary'
import PlaceOrder from '../components/core/Order/PlaceOrder'

const Checkout = () => {
  return (
    <div
    className='flex flex-col bg-gradient-to-r from-gray-100 to-green-900'
    >
      <div>
        <OrderSummary />
      </div>

      <div>
        <PlaceOrder />
      </div>
    </div>
  )
}

export default Checkout