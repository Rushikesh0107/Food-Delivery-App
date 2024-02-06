import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllOrders } from '../../../services/Operations/ordersAPI'
import OrderDetails from './OrderDetails'
import { deleteDeliveredOrder } from '../../../services/Operations/adminAPI.js'

import Modal from '@mui/material/Modal';


const OrdersForAdmin = () => {

    const dispatch = useDispatch()  
    const {adminOrders} = useSelector(state => state.order)
    const [order, setOrder] = useState({})
    //console.log(adminOrders);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    useEffect(() => {
        dispatch(fetchAllOrders());
    },[])

    const [open, setOpen] = React.useState(false);
    const handleOpen = (order) => {
        setOrder(order)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const handleDelivered = (order) => {
        dispatch(deleteDeliveredOrder(order._id))
        dispatch(fetchAllOrders())
    }

  return (
    <div>
        {adminOrders?.map((order, index) => (
            <div
            className='flex flex-col md:flex-row justify-between p-4 border-b-2 border-gray-200 md:w-1/2 mx-auto'
            key={index}
            >
                <div
                className='font-semibold flex flex-col items-center '
                >
                    <h2>Order {index + 1}</h2>
                    <p>Ordered items: {order.orderTotal}</p>
                    <p>Order Status: {order.paymentStatus}</p>
                    <p>Order Total: ₹ {order.grandTotal}</p>
                </div>

                <div
                className='flex items-center space-x-4 justify-center md:justify-end mt-4 md:mt-0'
                >
                    <button
                    className='bg-green-500 text-white p-2 rounded'
                    onClick={() => handleDelivered(order)}
                    >
                        Delivered
                    </button>

                    <button
                    onClick={() => handleOpen(order)}
                    className='bg-blue-500 text-white p-2 rounded'
                    >
                        Details
                    </button>
                </div>
            </div>
        ))}

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
        className='bg-white p-4 rounded w-[90%] md:w-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        >
            <OrderDetails order={order}/>
        </div>
      </Modal>
    </div>
  )
}

export default OrdersForAdmin