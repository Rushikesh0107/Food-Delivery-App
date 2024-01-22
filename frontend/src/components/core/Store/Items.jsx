import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getFoodByCategory } from '../../../services/Operations/foodAPI'
import { getAllFoods } from '../../../services/Operations/foodAPI'

const Items = () => {
  const {items} = useSelector((state) => state.item)
  const {categoryId} = useSelector((state) => state.category)
  const dispatch = useDispatch()

  //console.log(items);
  //console.log(categoryId);

  useEffect(() => {
    if(categoryId === "All Items" || categoryId === "") {
      dispatch(getAllFoods())
    } else if(categoryId !== "All Items") {
      dispatch(getFoodByCategory(categoryId))
      //console.log("Controll reached here");
    }
   }, [categoryId])

    //console.log(items);

  
    return (
      <div className="flex flex-col w-full md:flex-row md:max-w-6xl h-screen overflow-y-scroll">
      {items?.map((item) => (
        <div className="p-4" key={item._id}>
          <div className="bg-white rounded-lg shadow-lg">
            <img src={item.foodImage} alt={item.title} className="rounded-t-lg md:w-full" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <p className="text-gray-700 text-base">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-xl">$ {item.price}</span>
                <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    )
  }

export default Items