import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItem, removeItem,  } from "../utils/cartSlice";
import { faStar, faAngleDown, faCirclePlus, faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";


const link =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Menue = () => {
  const { id } = useParams();
  const data = useRestaurant(id);
  const [activeIndices, setActiveIndices] = useState(
    data[1]?.map((_, index) => index) || []
  );

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items)
  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return !data[0] || !data[1] ? (
    <Shimmer />
  ) : (
    <div className="container mt-24 ml-10">
      <div className="flex basis-full h-60 justify-evenly items-center bg-zinc-800 text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={link + data[0]?.cloudinaryImageId}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl text-white max-w-[538px] font-semibold">
            {data[0]?.name}{" "}
          </h2>
          <h3 className="text-white overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {data[0]?.city}
          </h3>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="text-white flex items-center px-1 py-0 gap-1">
              <span>
                <FontAwesomeIcon icon={faStar} />
                {data[0]?.avgRating}
              </span>
            </div>
            <div className="text-white ">|</div>
            <div className="text-white ">{data[0].sla.slaString}</div>
            <div className="text-white ">|</div>
            <div className="text-white ">{data[0].costForTwoMsg}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
        {data[1] == undefined ? (
          <h2>closed, come tomorrow</h2>
        ) : (
          data[1]?.map((ele, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <h4 className="font-bold text-lg">{ele?.card?.card?.title}</h4>
                <button onClick={() => toggleAccordion(index)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </div>

              <ul>
                {ele?.card?.card?.itemCards?.map((m, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex space-x-3 justify-between p-2 m-2 basis-[250px] mob:basis-[150px] hover:shadow-2xl ${
                      activeIndices.includes(index) ? "" : "hidden"
                    }`}
                  >
                    <div className=" p-2 m-2 flex-col justify-between text-justify">
                      <p className="font-bold text-xl">{m?.card?.info?.name}</p>
                      <p className="w-10 font-thin text-sm">
                        {m?.card?.info?.price
                          ? "₹ " + Number(m?.card?.info?.price) / 100
                          : "Free"}
                      </p>
                    </div>
                    
                    <div className="flex-col justify-between">
                    <img
                      className="w-[200px] h-[130px] mob:w-[130px] mob:[81px]"
                      src={link + m?.card?.info?.imageId}
                      alt={m.card.info.name}
                    />
                    
                    <div className="flex justify-evenly text-green-700">
                      <button onClick={() => removeFoodItem(m)}><FontAwesomeIcon icon={faCircleMinus} /></button>
                      <p>{cartItems.filter(item => item === m).length}</p>
                      <button onClick={() => addFoodItem(m)}><FontAwesomeIcon icon={faCirclePlus} /></button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menue;
