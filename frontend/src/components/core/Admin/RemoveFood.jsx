import React from 'react'
import SelectCategory from '../Store/SelectCategory'
import {useSelector} from 'react-redux'
import RenderItemsToRemove from './RenderItemsToRemove'

const RemoveFood = () => {
    const {categoryId} = useSelector(state => state.category)

    
  return (
    <div>
        <div>
            <SelectCategory />
        </div>

        <div>
            <RenderItemsToRemove />
        </div>
    </div>
  )
}

export default RemoveFood