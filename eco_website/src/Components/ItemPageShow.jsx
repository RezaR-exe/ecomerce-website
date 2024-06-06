
import CartContext from "../context/Cart";
import { useContext } from "react";

function ItemPageShow({ item }) {

    const { handleAddToCart } = useContext(CartContext);

    const renderedOptions = item.options.map((option) => {
        return <div><button className="border border-2 border-black m-2 p-2">{option}</button></div>
    })

    return (
        <div className="text-center">
            <div className="inline-block align-middle m-12 p-4">
                <img src={item.image} className="h-52" alt="" />
                <p className="border border-2 border-black p-4 w-80 m-2">{item.description}</p>
            </div>
            <div className="inline-block align-middle border border-2 border-black p-4 m-12">
                <strong className="text-green-700">Price: ${item.price}</strong>
                <p className="m-12 flex flex-wrap max-w-xl">{renderedOptions}</p>
                <button className="border border-green-700 rounded text-white bg-green-700 w-32 mb-4" onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemPageShow;