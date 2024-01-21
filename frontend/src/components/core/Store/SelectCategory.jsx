import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../services/Operations/categoryAPI';
import { useSelector } from 'react-redux';

export default function SelectCategory() {
  const [categoryName, setCategoryName] = useState([]);
  const dispatch = useDispatch();

  
  useEffect(() => {
      dispatch(getCategories());
    }, []);
    
    const {categories} = useSelector((state) => state.category);
    //console.log(categories);

  return (
    <div className="w-full flex justify-center py-5">
        <select 
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 md:w-60">
            {categories.map((category) => (
            <option 
            key={category._id} 
            value={category._id}
            onClick={() => setCategoryName(category.title)}
            >
                {category.title}
            </option>
            ))}
        </select>
    </div>
  );
}
