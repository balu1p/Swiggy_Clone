import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
        <h1 className="mt-24 p-2 text-2xl text-center"> <i className="bg-slate-500 m-2 p-2 text-white">About Crowene Plaza ..:)</i></h1>
        <div className="flex justify-center justify-items-center bg-orange-200 m-2 p-2">
        <img className="w-auto h-64 p-3 m-3"
        src="https://www.nicepng.com/png/detail/114-1145508_free-home-delivery-png-graphic-free-delivery-boy.png" alt="" />
        <img className="w-auto h-64 p-3 m-3"
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
        </div>
        <div className="w-auto h-32 bg-orange-400">
        <p className="text-2xl text-white text-center m-4 p-4">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
        </p>
        </div>
        </div>
    )
}
export default About;