import React from 'react'

const RenderItemsInCart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))

    console.log(cart[0]);
  return (
    <div>
        {cart.map((item) => {
            return (
                <div key={item._id}>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default RenderItemsInCart