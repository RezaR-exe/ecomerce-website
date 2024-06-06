import { useContext } from "react";
import CartContext from "../context/Cart";
import ItemShow from "../Components/ItemShow";


function TechPage() {
    const {items} = useContext(CartContext)


    const renderedItems = items.map(item => {
        if (item.type === "tech") {
            return <ItemShow key={item.id} item={item} />
        }
    })

    return (
        <div className="flex clear-both justify-center content-center items-center mt-32 flex-wrap m-32">
            {renderedItems}
        </div>
    )
}

export default TechPage;