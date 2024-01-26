import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getFoodByCategory } from '../../../services/Operations/foodAPI'
import { getAllFoods } from '../../../services/Operations/foodAPI'
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { addToCart } from '../../../Slices/cartSlice'
import { toast } from 'react-hot-toast';

const Items = () => {
  const {items} = useSelector((state) => state.item)
  const {categoryId} = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.item)

   const itemsPerPage = 8; // Change this value to set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  //console.log(items);
  //console.log(categoryId);

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

    const handleClick = (item) => {
      const user = JSON.parse(localStorage.getItem('user'))
      if(!user) {
        toast.error("Please login to add items to cart")
        return
      }
      item = {...item, quantity: 1}
      //console.log(item);
      dispatch(addToCart(item))
      //console.log(item);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
    return (
    <>
    {isLoading ? (
    <>
      <div className='flex justify-center w-full overflow-y-scroll h-screen'>
      <Stack spacing={2}>
        <Skeleton variant="rounded" width={350} height={150} />
        <Skeleton variant="rounded" width={350} height={150} />
        <Skeleton variant="rounded" width={350} height={150} />
        <Skeleton variant="rounded" width={350} height={150} />
        <Skeleton variant="rounded" width={350} height={150} />
      </Stack>
      </div>
    </>
    ) : (
      <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentItems.map((item) => (
              <div key={item._id} className="p-4 border border-gray-300 rounded-lg max-w-xs justify-self-center">
                {/* Your item content */}
                <div className="w-72 h-72">
                  <img className="w-full h-full object-cover rounded-lg" src={item.foodImage} alt={item.name} />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                  <p className="text-green-500 font-bold text-base ">$ {item.price}</p>
                </div>
                <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center'
                onClick={() => handleClick(item)}
                >
                  Add to Cart
                </button>
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
      </>)}
    </>
    )  
    
  }

export default Items