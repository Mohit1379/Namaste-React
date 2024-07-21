import React from 'react'
import { CDN_URL } from '../../utils/contants'

function RestaurantCard({res}) {
  return (
    <>
    <div className='res-card' style={{backgroundColor:"#f0f0f0", width:"280px"}}>
      <div className='food-image' style={{display:"flex"}}>
      <img src={CDN_URL+res?.info?.cloudinaryImageId} width={286} height={191} alt='logo' title='logo'/>
      </div>
      <h3>{res?.info?.name}</h3>
      <h4>{res?.info?.locality}</h4>
      <h4>{res?.info?.cuisines.join(", ")}</h4>
      <h4>{res?.info?.avgRating}</h4>
      <h5>Delivery Time : {res?.info?.sla?.deliveryTime}</h5>
    </div>
    </>
  )
}

export default RestaurantCard