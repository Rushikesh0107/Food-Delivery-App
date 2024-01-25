import React, { useEffect } from 'react'
import CartComponent from '../components/core/Cart/CartComponent'
import {useSelector} from 'react-redux'

const Cart = () => {
  let total = useSelector((state) => state.cart.total)

  useEffect(() => {
    total = localStorage.getItem('total')
  }, [total])


  // console.log(total);


  return (
    <div>
      <CartComponent />
      {total}
    </div>
  )
}

export default Cart