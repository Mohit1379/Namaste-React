import { useParams } from 'react-router-dom';
import Simmer from './Simmer';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {

    const params= useParams();
    const resMenu=useRestaurantMenu(params.resID)
    const [showIndex, setShowIndex] = useState(null);

      if(resMenu===null)
      {
        return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
              <Simmer/>
        </div>
        );
    }



        //In some cases the itemCards is in cards[1] or in cards[2] so it may throw error 
      const {name, city, cuisines}=resMenu?.data?.cards[2]?.card?.card?.info;
      const categories=resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log(categories);
      // console.log(category.card.card)
  return (
      <div className='text-center w-7/12 mx-auto'>
         <h1 className='font-bold  mt-8 my-4 text-2xl'>{name}</h1>
         <p className='font-bold pb-10'>
          {cuisines.join(", ")} in {city}
         </p>
         <div className='restaurant-category'>
          {categories.map((category,index) => <RestaurantCategory setShowIndex={()=>setShowIndex(showIndex==index ? null : index)}  showItems={index==showIndex ? true : false}  category={category} key={category.card.card.title}/> )}
         </div>
      </div>
  )
}

export default RestaurantMenu