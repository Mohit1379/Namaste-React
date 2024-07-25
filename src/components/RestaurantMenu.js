import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Simmer from './Simmer';
import { MENU_URL } from '../../utils/contants';

function RestaurantMenu() {

    const params= useParams();
    const [resMenu, setResMenu]=useState(null)
    useEffect(()=>{
        const fetchRestaurantData = async()=>{
            const response= await fetch(MENU_URL+params.resID);
            const data = await response.json();
            console.log("This is Data",data)
            setResMenu(data)
        }
        fetchRestaurantData();
      },[])

      if(resMenu===null)
      {
        return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
              <Simmer/>
        </div>
        );
    }

        //In some cases the itemCards is in cards[1] or in cards[2] so it may throw error 
      const {name, city, avgRating, cuisines, sla}=resMenu?.data?.cards[2]?.card?.card?.info;
      const {itemCards}=resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    //   console.log(itemCards)


  return (
<div className="menu">
<div className='RestaurantName'>
            <h1>{name}</h1>
            <h2>⭐️ Rating : {avgRating}  </h2>
            <h3>Delivery Timing: {sla.minDeliveryTime} : {sla.maxDeliveryTime} mins</h3>
            <h3>Cuisines: {cuisines.join(", ")} in {city}</h3>
        </div>
  <h4>Main Menu</h4>
  <div className="corner topleft"></div>
  <div className="corner topright"></div>
  <div className="corner bottomleft"></div>
  <div className="corner bottomright"></div>
  <ul>
   {itemCards?.map((item)=>
        <li key={item.card.info.id}>
      <em>S{item.card.info.name}</em>
      <span>${item.card.info.price / 100}</span>
    </li> 
   )} 
  </ul>
</div>
  )
}

export default RestaurantMenu