import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getFoodByCategory } from '../../../services/Operations/foodAPI'
import { getAllFoods } from '../../../services/Operations/foodAPI'
import { deleteFood } from '../../../services/Operations/adminAPI'

const RenderItemsToRemove = () => {
  let {items} = useSelector((state) => state.item)
  const {categoryId} = useSelector((state) => state.category)
  const dispatch = useDispatch()

   const itemsPerPage = 12; // Change this value to set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (item) => {
        dispatch(deleteFood(item._id))
        items = items.filter(product => product._id !== item._id)
    }

    useEffect(() => {
        if(categoryId === "All Items" || categoryId === "") {
        dispatch(getAllFoods())
        } else if(categoryId !== "All Items") {
        dispatch(getFoodByCategory(categoryId))
        //console.log("Controll reached here");
        setCurrentPage(1)
        }
    }, [categoryId])

    //console.log(items);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  
    return (
      <>
          <div 
          className="flex flex-col gap-5 items-center w-full  md:grid-cols-2 md:grid md:w-full lg:grid-cols-3">
            {currentItems.map((item, index) => (
                <div
                key={index}
                className='flex items-center w-full bg-white shadow-md rounded-md p-2 md:p-4 justify-between'
                >
                    <div
                    className='w-28 md:w-40 h-24'
                    >
                        <img
                        src={item.foodImage} 
                        alt="food image" 
                        className='object-contain w-full h-full'
                        />
                    </div>
                    <div>
                        <h1
                        className='text-md font-bold md:text-xl md:font-bold md:text-gray-500 text-center'
                        >
                            {item.title}
                        </h1>
                    </div>

                    <div
                    >
                        <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'
                        onClick={() => handleClick(item)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
          </div>



          {/* Pagination */}
          <div className="flex justify-center mt-4 mb-4">
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                className={`mx-1 px-3 py-2 bg-gray-300 rounded ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'text-gray-700'}`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
        </div>
    </>
    )  
    
  }

export default RenderItemsToRemove