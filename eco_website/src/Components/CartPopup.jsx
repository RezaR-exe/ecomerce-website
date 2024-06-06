import PopupItemShow from "./PopupItemShow";
import { useContext } from "react";
import CartContext from "../context/Cart";
import Link from "../Link";

function CartPopup() {
    const { cartItems, cartTotalPrice } = useContext(CartContext);

    const renderedItems = cartItems.map((item, index) => {
        return <PopupItemShow key={index} item={item} />
    })

    return(
        <div>
            {renderedItems}
            <strong className="p-2 m-2 flex justify-center"><h3>Total Price: ${cartTotalPrice}</h3></strong>
            {cartItems.length > 0 ? <Link to="/cart"><button className="border border-green-700 bg-green-700 w-full text-white">View Cart</button></Link> : null}
        </div>
        
    )
}

export default CartPopup;