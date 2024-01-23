import React, {useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { getCart } from '../../../services/Operations/cartAPI';
import ItemInCart from './ItemInCart';

const ListOfItemsInCart = () => {

  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCart())
  }
  , [])

  
  const {cart} =  useSelector((state) => state.cart)  
  //console.log(cart)
  return (
    <>
      {isLoading ? (
      <>
      <div className='flex justify-center py-4 overflow-y-scroll h-screen'>
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={350} height={150} />
          <Skeleton variant="rounded" width={350} height={150} />
          <Skeleton variant="rounded" width={350} height={150} />
          <Skeleton variant="rounded" width={350} height={150} />
          <Skeleton variant="rounded" width={350} height={150} />
          <Skeleton variant="rounded" width={350} height={150} />
        </Stack>
      </div>
      </>) : (
      <>
        <ItemInCart />
      </>)}
    </>
  )
}

export default ListOfItemsInCart