import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getCategories } from '../../../services/Operations/categoryAPI'
import {useSelector} from 'react-redux'
import { addCategory } from '../../../services/Operations/adminAPI'

const AddCategory = () => {
    let [formData, setformData] = useState({
        title: "",
    })

    const dispatch = useDispatch()

    const {title} = formData
    const [file, setFile] = useState(null); 
    //console.log(categoryId);

    const handleOnChange = (e) => {
        setformData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // Manually set the value for the file input
        };

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        formData = {...formData, categoryImage: file}
        //console.log(formData);
        dispatch(addCategory(title, file))
    }
    
  return (
    <div 
    className='flex flex-col justify-center items-center'
    style={{height: 'calc(100vh - 64px)'}}
    >
        <div>
            <h1
            className='font-bold text-2xl mb-5 md:text-3xl'
            >
                Add Category
            </h1>
        </div>

        <div
        className='w-full md:w-1/2 lg:w-1/3'
        >
            <form
            className='flex flex-col gap-4 '
            onSubmit={handleOnSubmit}
            >
                <input 
                type="text" 
                required
                value={title}
                name="title"
                onChange={handleOnChange}
                placeholder='Category Title'
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <input 
                type="file" 
                name='categoryImage'
                required
                placeholder='Category Image'
                onChange={(e) => handleFileChange(e)}
                className='p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'
                />

                <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center'
                >
                    Add Category
                </button>   
            </form>
        </div>
    </div>
  )
}

export default AddCategory