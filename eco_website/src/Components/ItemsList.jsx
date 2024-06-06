import ItemShow from "./ItemShow";
import { useContext } from "react";
import CartContext from "../context/Cart";


function ItemsList() {

    const { items } = useContext(CartContext)

    const renderedItems = items.map((item, index) => {
        return <ItemShow key={index} item={item} />
    })


    return (
        <div className="flex clear-both justify-center content-center items-center mt-32 flex-wrap m-32">
            {renderedItems}
        </div>
    )
}

export default ItemsList;