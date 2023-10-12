import { useState, useEffect, useContext } from "react";
import RestrauCards from "./RestrauCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = ({ user }) => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestrau, setFilteredRestrau] = useState([]);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.66682693229555&lng=74.25015181303024&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    //conditional Rendering..
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestrau(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(allRestaurants);
    console.log(filteredRestrau);
  }

  if (!allRestaurants) return null;
  //  if(filteredRestrau?.length === 0) return <h1>No Restraunt Found :)</h1>
  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center space-x-6 p-4">
        <input
          type="text"
          className="p-2 mt-20 text-sm font-medium text-slate-700 appearance-none border-2 border-gray-300 rounded-md w-64 py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="mt-20 bg-gray-800 text-teal-50 p-2 rounded hover:bg-slate-950"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestrau(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap space-x-4 justify-around p-3">
        {filteredRestrau?.length === 0 ? (
          <h1>No Restraunt Found</h1>
        ) : (
          filteredRestrau.map((restaurant) => {
            // console.log(restaurant?.info?.id);
            return (
              <Link
                to={"/restra/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestrauCards {...restaurant?.info} user={user} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
