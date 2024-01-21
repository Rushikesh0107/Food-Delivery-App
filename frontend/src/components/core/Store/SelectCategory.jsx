import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../services/Operations/categoryAPI';
import { useSelector } from 'react-redux';
import { setCategory } from '../../../Slices/categorySlice';

export default function SelectCategory() {
  const [categoryName, setCategoryName] = useState("All Items");
  const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        dispatch(setCategory(categoryName));
        //console.log(categoryName);
    }
    , [categoryName]);

    
    const {categories} = useSelector((state) => state.category);
    
    const newCategory = categories.map((category) => (category.title)
    );

    newCategory.push("All Items")

    //console.log(newCategory);

  return (
    <div className="w-full flex justify-center py-5">
        <select 
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 md:w-60"
        defaultValue={{ label: "All Items", value: "All Items" }}
        onChange={(e) => setCategoryName(e.target.value)}
        >
            {newCategory.map((category) => (
            <option 
            key={category} 
            value={category}
            >
                {category}
            </option>
            ))}
        </select>
    </div>
  );
}
