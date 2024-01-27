import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../services/Operations/categoryAPI';
import { useSelector } from 'react-redux';
import { setCategoryID } from '../../../Slices/categorySlice';
import {useNavigate} from 'react-router-dom';

export default function SelectCategory() {
  const [categoryId, setCategoryId] = useState("All Items");
  const dispatch = useDispatch();


  
    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useEffect(() => {
      //console.log(categoryId);
      dispatch(setCategoryID(categoryId));
    }, [categoryId]);
    
    const {categories} = useSelector((state) => state.category);

    const handleOnChange = (e) => {
      if(e.target.value !== "All Items") {
        const id = categories.find((category) => category.title === e.target.value)._id;
        setCategoryId(id);
      } else {
        setCategoryId("All Items");
      }

    }

    //console.log(newCategory);

  return (
    <div className="w-full flex justify-center py-5 ">
        <select 
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 md:w-60" 
        onChange={handleOnChange}
        >
            <option value="All Items">All Items</option>
            {categories.map((category) => (
            <option 
            key={category._id} 
            id={category._id}
            value={category.title}
            >
                {category.title}
            </option>
            ))}
        </select>
    </div>
  );
}
