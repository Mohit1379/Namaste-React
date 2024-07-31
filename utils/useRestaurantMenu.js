import { useEffect, useState } from "react"
import { MENU_URL } from "./contants";

const useRestaurantMenu = (resID)=>{
    const [resList, setResList]=useState(null);

   async function fetchData(){
    const response= await fetch(MENU_URL+resID);
    const data = await response.json();
    console.log(data);
    setResList(data)
    }
    useEffect(()=>{
        fetchData();
    },[])

    return resList;
}

export default useRestaurantMenu;