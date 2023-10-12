import {IMG_URL} from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const RestrauCards = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    locality,
    costForTwoString
  }) => {
    return (
      <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow-2xl ">
      <div className="w-80 p-4">
        <img
          src={
            IMG_URL+
            cloudinaryImageId
          }
        />
        <h1 className="font-bold">{name}</h1>
        {cuisines && <h3 className="p-1 m-1">{cuisines.join(", ")}</h3>}
        <div className="flex justify-items-center justify-evenly">
        {
          avgRating <= 3.9 ? <span className="p-1 m-1 bg-orange-400 rounded"><FontAwesomeIcon icon={faStar} />{avgRating}</span> : <span className="p-1 m-1 bg-green-400 rounded"><FontAwesomeIcon icon={faStar} />{avgRating}</span>
        }  
        <div className="flex justify-center space-x-2 justify-items-center p-2">
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{locality}</p>
          </div>
      </div>
       </div>
       </div>
    );
  };
  
  export default RestrauCards;