import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";

function Body() {
  const [restList, setRestList] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant]=useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestList(restaurants);
    setFilterRestaurant(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    const filterResList = filterRestaurant.filter((res) => res?.info?.avgRating <= 4);
    setFilterRestaurant(filterResList);
  };
  const handleResetFilterClick = () => {
    setFilterRestaurant(restList);
  };

  return (
    <div className="body">
      <div className="searchFeature" style={{marginTop:"10px"}}>
        <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
        <button onClick={()=>{
            // setFilterRestaurant(restList);
           const searchResult = restList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestaurant(searchResult);
        }}>Search</button>
      </div>
      <div className="filter">
        <button onClick={handleClick}>Top Rated Restaurant</button>
        <button onClick={handleResetFilterClick}>Reset</button>
      </div>
      <div className="res-container">
        {filterRestaurant
          ? filterRestaurant.map((res) => (
              <RestaurantCard res={res} key={res.info.id} />
            ))
          : 
          <Simmer/>
          }
      </div>
    </div>
  );
}

export default Body;
