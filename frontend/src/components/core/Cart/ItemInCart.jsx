import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

const ItemInCart = () => {

    const {cart} =  useSelector((state) => state.cart)

    cart[0]?.map((item) => console.log(item.productId))

  return (
    <div>
        items
    </div>
  )
}

export default ItemInCart