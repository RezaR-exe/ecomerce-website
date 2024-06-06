import ItemCartShow from "./ItemCartShow";
import CartContext from "../context/Cart";
import {useContext} from "react";
import Link from "../Link";

function ItemCartList() {

    const {cartItems, cartTotalPrice} = useContext(CartContext);

    const renderedItems = cartItems.map((item, index) => {
        return <ItemCartShow item={item} key={index}/>
    })

    return (
        <div>
            <h1 className="m-4 p-4">My Shopping Cart</h1>
            <div>
                <div
                    className="inline-flex flex-col justify-center items-center ml-96 border border-black p-6 max-w-xl mb-40">
                    {renderedItems}
                </div>
                <div
                    className="inline-flex flex-col justify-center items-center ml-12 border border-black p-6 max-w-xl">
                    <strong><p>Total: ${cartTotalPrice}</p></strong>
                    <Link to={"/orderinfo"}><button className="mt-4 border border-green-700 m-2 p-2 rounded bg-green-700 text-white">Submit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCartList;