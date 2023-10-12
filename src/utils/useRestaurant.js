//Own Hook
import { useState, useEffect } from "react";
import {MENU_CDN} from "../constants"

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null);
    const [restraMenu, setRestrauMenu] = useState(null)
   
    
      async function getRestrauInfo() {
        
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7049873&lng=74.24325270000001&restaurantId=" +
            id +
            "&submitAction=ENTER"
        );
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setRestrauMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(json?.data);
      }
      useEffect(() => {
        getRestrauInfo();
      }, []);
      return [ restaurant, restraMenu];
    
}
export default useRestaurant;