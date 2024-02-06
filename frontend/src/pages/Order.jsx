import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchOrders } from '../services/Operations/ordersAPI'
import OrderCard from '../components/core/Order/OrderCard'

const Order = () => {

  const dispatch = useDispatch()
  const {orderedItems, orderDetails} = useSelector(state => state.order)
  //console.log(orderedItems);

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])
  return (
    <div
    className='bg-gradient-to-r from-gray-100 to-green-900 h-svh flex  overflow-x-hidden flex-col gap-3 '
    >
      <div>
        <h1>
          {orderedItems?.length > 0 ? (
          <>
            <div
            className='text-center md:text-3xl text-2xl font-bold text-white'
            >
              Arriving Soon...
            </div>
          </>) : (
          <>
            <div
            className='text-center md:text-3xl text-2xl font-bold text-white'
            >
              <p>Order Something</p>
              <p>What are you waiting for ?</p>
            </div>
          </>)}
        </h1>
      </div>

      <div
      className='flex flex-col gap-3 w-full md:w-1/2 overflow-y-auto h-[75%] md:h-[70%]  rounded-lg p-4 shadow-lg overflow-x-hidden scrollbar-hide mx-auto'
      >
        {orderedItems?.map((item, index) => (
          <div
          className='py-2'
          key={item._id}
          >
            <OrderCard item={item}/>
          </div>
        ))}
      </div>

      <div
      className='w-full flex justify-center mt-3'
      >
        <button
        className='bg-green-500 text-white py-2 px-3 rounded-md font-bold'
        onClick={() => window.location.href = '/store'}
        >
          Keep Ordering
        </button>
      </div>
    </div>
  )
}

export default Order