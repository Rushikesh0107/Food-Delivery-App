import React, { forwardRef, useId } from "react"

const Input = forwardRef( function Input({
    placeholder,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-96">
        <input 
        placeholder={placeholder}
        type={type} 
        className={`p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref = {ref}
        />
        </div>
    )
})

export default Input
