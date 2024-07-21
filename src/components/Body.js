import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurant from '../../utils/mockData'

function Body() {
    const [restList, setRestList] = useState(restaurant);

    const handleClick=()=>{
        const filterResList=restList.filter((res)=> res?.info?.avgRating <= 4 )
        setRestList(filterResList);
    }
    const handleResetFilterClick=()=>{
        setRestList(restaurant);
    }

  return (
    <div className='body'>
    <div className='filter'>
        <button onClick={handleClick}>Top Rated Restaurant</button>
        <button onClick={handleResetFilterClick}>Reset</button>
    </div>
    <div className='res-container'>
      {restList.map((res)=> <RestaurantCard res={res} key={res.info.id} /> )}
    </div>
  </div>
  )
}

export default Body