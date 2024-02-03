import { useState, useContext } from "react";
import { Link, } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
const Navbar = () => {
  const isOnline = useOnline();
 

  const cartItems = useSelector(store=>store.cart.items);
  return (
    <div className="sticky top-0">
      <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
        <Link to={"/"}>
      <img
          className="h-16 w-40 p-1 m-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61VN62gBZkGyuWJUlkgPFWpe9X4usrLEbVA&usqp=CAU"
          alt="Crowne Plaza"
        />
        </Link>
        <ul className="flex space-x-9 ml-96 items-center container mx-auto py-4 sticky top-0">
          <li className="text-black hover:text-orange-600 p-2  hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-black hover:text-orange-600 p-2 hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="text-black hover:text-orange-600 p-2 hover:underline">
            <Link to={"/help"}>Help</Link>
          </li>
          <li className="text-black hover:text-orange-600 p-2 hover:underline">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li className="text-black hover:text-orange-600 p-2 hover:underline">
            <Link to={"/cart"}>Cart-{cartItems.length}</Link>
          </li>
        </ul>
        <div className="flex space-x-3 justify-end ml-56">
          <h1 className=" flex items-center space-x-6 justify-end ">
            {isOnline ? "🟢" : "🔴"}
          </h1>
          {!localStorage.getItem("authToken") ? (
            <div className="flex">
              <div
                className="btn bg-white text-danger mx-1 mt-4 hover:text-orange-600 p-2  hover:underline"
              >
                Login
              </div>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-white text-danger mx-1 mt-4 hover:text-orange-600 p-2  hover:underline"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const Heading = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default Heading;
