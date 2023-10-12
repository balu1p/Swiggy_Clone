import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector( store => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
        <p className="font-bold text-3xl p-2 mt-20 text-center">Cart Items...</p>
        <button className="bg-black text-white rounded-sm p-2 m-1" onClick={()=>handleClearCart()}>Clear Cart</button>
        <div className="flex flex-wrap space-x-4 justify-evenly p-3">{
            
            cartItems.map(item =>  <FoodItem key={item.id}{...item}/>)
            
        }
        </div>
       {console.log(cartItems)}
        </div>
    )
}

export default Cart;


