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

   const itemsPerPage = 10; // Change this value to set the number of items per page
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems.map((item) => (
              <div key={item._id} className="bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded py-4 flex md:flex-col justify-between px-2">
                <div className="flex justify-center">
                  <img
                    src={item.foodImage}
                    alt="food"
                    className="rounded-md h-40 w-40 object-cover" 
                  />
                </div>
                <div className="mt-2 w-1/2 md:w-full flex-col gap-4">
                  <p className="text-lg font-semibold text-center text-gray-700">
                    {item.title}
                  </p>

                  {/* <div className="flex justify-center mt-2">
                    <Rating name="read-only" value={item.rating} readOnly />
                  </div> */}


                  <div className="flex justify-center mt-2">
                    <p className="text-lg font-semibold text-center text-gray-700">
                      ₹{item.price}
                    </p>
                  </div>
                  <div className="flex justify-center mt-2">
                    <button
                      onClick={() => handleClick(item)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* Pagination */}
          <div className="flex justify-center mt-4 mb-4">
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                className={`mx-1 px-3 py-2 bg-gray-300 rounded ${currentPage === i + 1 ? 'bg-green-500 text-white' : 'text-green-700'}`}
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