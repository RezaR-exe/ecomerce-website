import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import CartContext from "../context/Cart";


function ItemShow({ item }) {

    const { createRenderBasedOnReceivedItem, navigate } = useContext(NavigationContext)
    const { handleAddToCart } = useContext(CartContext)

    return (
        <div className="flex flex-col border rounded bg-white p-15px md:px-16px h-full m-2 p-2 w-80">
            <img onClick={() => {createRenderBasedOnReceivedItem(item); navigate(`/item-${item.id}`)}} className="p-2 m-2 h-52 w-52 self-center cursor-pointer" src={item.image} alt="" />
            <h1 className="leading-20 text-sm truncate-3-lines">{item.title}</h1>
            <p className="text-green-700 font-bold text-xl">${item.price}</p>
            <button className="border border-green-700 rounded text-white bg-green-700" onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
    )
}

export default ItemShow;

