import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { topRestaurant } from "./RestaurantCard";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

function Body() {
  const [restList, setRestList] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant]=useState("");
  const online=useOnlineStatus;
  const TopRestaurantCards=topRestaurant(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(UserContext)

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    const restaurants =data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
  console.log(filterRestaurant)

  if (online === false) {
    return (
      <h1>Your Connection is down, Please check the connection and try again</h1>
    );
  }

  return (
    <div className="body">
      <div className="flex">
            <div className="searchFeature m-4 p-4" style={{marginTop:"10px"}}>
              <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
              <button className="px-4 bg-green-200 m-2 py-2 rounded-lg" onClick={()=>{
                  // setFilterRestaurant(restList);
                const searchResult = restList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterRestaurant(searchResult);
              }}>Search</button>
            </div>
            <div className="filter flex items-center">
              <div>
                <button className="px-4 bg-blue-200 m-2 py-2 rounded-xl" onClick={handleClick}>Top Rated Restaurant</button>
                <button className="px-4 bg-red-200 m-2 py-2 rounded-xl" onClick={handleResetFilterClick}>Reset</button>
              </div>
              <input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} className="border border-black p-2 "/>
            </div>
        </div>
      <div className="res-container justify-center flex flex-wrap">
        {filterRestaurant
          ? filterRestaurant.map((res) => (
            <Link to={`/restaurant/${res.info.id}`} key={res.info.id}> 
            {res?.info?.avgRating >= "4"  ? <TopRestaurantCards res={res}/> :  <RestaurantCard res={res} />  }
            </Link>
            ))
          : 
          <Simmer/>
          }
      </div>
    </div>
  );
}

export default Body;
