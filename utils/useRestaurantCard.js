import {useState, useEffect} from 'react';

const useRestaurantCard=()=>{
    const [restList, setRestList] = useState("");

    const fetchData = async () => {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        setRestList(data);
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      return restList
}

export default useRestaurantCard;