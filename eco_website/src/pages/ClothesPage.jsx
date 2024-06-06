import { useContext } from "react";
import CartContext from "../context/Cart";
import ItemShow from "../Components/ItemShow";


function ClothesPage() {
    const {items} = useContext(CartContext)


    const renderedItems = items.map(item => {
        if (item.type === "clothes") {
            return <ItemShow key={item.id} item={item} />
        }
    })

    return (
        <div style={{marginBottom: "339px"}} className="flex clear-both justify-center content-center items-center mt-32 flex-wrap m-32">
            {renderedItems}
        </div>
    )
}

export default ClothesPage;