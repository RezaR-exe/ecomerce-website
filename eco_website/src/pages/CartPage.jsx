import ItemCartList from "../Components/ItemCartList";
import CartContext from "../context/Cart";
import { useContext } from "react";

function CartPage() {

    const { cartItems } = useContext(CartContext);

    return(
        <div>
            {cartItems.length > 0 ? <ItemCartList /> : <p>hello there are no items here</p>}
        </div>
    )
}

export default CartPage;