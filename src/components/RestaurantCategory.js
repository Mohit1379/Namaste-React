import React, { useState } from 'react'
import RestaurantItems from './RestaurantItems'

function RestaurantCategory({ category,showItems,setShowIndex}) {

    const handleClick=()=>{
         setShowIndex();
    }
  return (
    <div className='p-4 my-4 bg-gray-100 shadow-lg'>
        <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-xl'>{category?.card?.card?.title} ({category?.card?.card?.itemCards.length})</span>
            <span>{showItems ? '⬆️' : '⬇️'}</span>
        </div>

            {showItems &&    <RestaurantItems items={category.card.card.itemCards}/> }

    </div>
  )
}

export default RestaurantCategory
