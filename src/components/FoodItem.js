import React from "react";
import { IMG_URL } from "../constants";
const FoodItem = ({ card }) => {
  return (
    <div className="container border-black basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow-2xl ">
    <div>
      <img className="w-[254px] h-[165px] mob:w-[130px] mob:[81px] m-1 p-1" src={IMG_URL+card.info.imageId}  />
      
        <h4 className="text-xl">{card.info.name}</h4>
        <p>{card.info.price ? `₹ ${card.info.price / 100}` : "Free"}</p>
        {/* Add more information as needed */}
    </div>
    </div>
  );
};

export default FoodItem;