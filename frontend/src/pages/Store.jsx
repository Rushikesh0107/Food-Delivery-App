import React from 'react'
import SelectCategory from '../components/core/Store/SelectCategory'
import Items from '../components/core/Store/Items'

const Store = () => {
  return (
    <div
    className=''
    >
        <SelectCategory />
        <div
        className='flex flex-wrap justify-center flex-col px-4 w-full'
        >
        <Items />
        </div>
    </div>
  )
}

export default Store