import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getCategoryByTitle } from '../../../services/Operations/categoryAPI'

const Items = () => {
    const { category } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        if(category !== "All Items") {
            dispatch(getCategoryByTitle(category))
        } else {
            console.log(category);
        }
    },[category])

  return (
    <div>
        {category}
    </div>
  )
}

export default Items