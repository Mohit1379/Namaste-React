import React, { useContext } from 'react'
import { CDN_URL } from '../../utils/contants'
import UserContext from '../../utils/UserContext'

function RestaurantCard({res}) {
  console.log(res?.info?.name)
  const {loggedInUser} = useContext(UserContext)
  return (
    <>
    <div className='res-card m-4 p-4 w-[300px] h-[550px] bg-gray-100 hover:bg-gray-300'>
      <div className='food-image' style={{display:"flex"}}>
      <img className='rounded-lg' src={CDN_URL+res?.info?.cloudinaryImageId} width={286} height={191} alt='logo' title='logo'/>
      </div>
      <div className='py-4'>
        <h3 className='font-bold text-lg'>{res?.info?.name}</h3>
        <h4><span className='font-bold'>Area: </span>{res?.info?.locality}</h4>
        <h4 className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>
          <span className='font-bold'>Cuisines: </span>{res?.info?.cuisines.join(", ")}
        </h4>
        <h4><span className='font-bold'>Rating: </span>{res?.info?.avgRating} ⭐️</h4>
        <h5><span className='font-bold'>Delivery Time: </span>{res?.info?.sla?.deliveryTime} minutes</h5>
        <p>User : {loggedInUser}</p>
      </div>
    </div>
    </>
  )
}

export default RestaurantCard

export const topRestaurant=(RestaurantCard)=>{
  return(props)=>{
    return (
      <>
      <label className='absolute bg-black m-2  text-white'>Top Restaurant</label>
      <RestaurantCard {...props}/>
      </>
    )
  }
}