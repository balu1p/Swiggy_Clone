import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Footer = () => {
  const {user} = useContext(UserContext)
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 text-center leading-[3.5rem] bottom-0 fixed z-40 bg-gray-800 text-white">
      <span className="text-left mob:text-xs mob:text-center">Hey....  Thanks for using Crowne Plaza <span className="text-red">&#x2764;</span> </span>
      <span className="text-center mob:text-xs">Developed with <span className="text-red">&#x2764;</span> by   {user.name}</span>
    </div>
  )
  };

  export default Footer;