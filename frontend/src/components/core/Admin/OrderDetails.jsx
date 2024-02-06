import React, {useState, useEffect} from 'react'
import { apiConnector } from '../../../services/apiConnector'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL 

const OrderDetails = ({order}) => {

    const [user, setUser] = useState({})
    // console.log(order);

    useEffect(() => {

        const fetchUser = async () => {

            try{
                const response = await apiConnector(
                    "GET",
                    `${BASE_URL}/users/get-user-by-id/${order.userId}`,
                    null,
                    {
                        "authorization": `Bearer ${localStorage.getItem('accessToken')}`  
                    }
                )
        
                setUser(response.data.data)
                // console.log(response.data);
            } catch (error) {
                console.log("ERROR WHILE FETCHING USER ", error);
            }
        }

        fetchUser();
    }, [])
    //console.log(order);
  return (
    <div
    className='flex flex-col gap-2 rounded-md'
    >
        <h1
        className='text-xl font-semibold text-center'
        >Order Details</h1>

        <div>
            <img 
            src={user?.avatar} 
            alt="user image" 
            className='w-20 h-20 rounded-full mx-auto object-cover'
            />
        </div>

        <div>
            <p
            className='text-center font-semibold text-lg'
            >{user?.fullname}</p>
        </div>

        <div>
            <p
            className='text-center font-semibold text-lg'
            >
                Email :- {user?.email}
            </p>
        </div>


        <div>
            <p
            className='text-center font-semibold text-lg'
            >   
                Phone :- {user?.phone}
            </p>
        </div>

        <div>
            <p
            className='text-center font-semibold text-lg'
            >
                {order?.deliveryAddress}
            </p>
        </div>

        <div>
            {order?.orderItems?.map((items, index) => {
                return (
                    <div
                    key={index}
                    className='flex justify-between p-2 border-b-2  font-semibold'
                    >
                        <p>{items?.title}</p>
                        <p>{items?.quantity}</p>
                    </div>
                )
            })}
        </div>

        <div className='flex flex-col space-y-4 font-semibold text-lg'>

            <div className='flex justify-between'>
                <p>Order Status:</p>
                <p>{order?.paymentStatus}</p>
            </div>
            <div className='flex justify-between'>
                <p>Order Total:</p>
                <p>₹ {order?.grandTotal}</p>
            </div>
            <div className='flex justify-between'>
                <p>Ordered Items:</p>
                <p>{order?.orderTotal}</p>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails