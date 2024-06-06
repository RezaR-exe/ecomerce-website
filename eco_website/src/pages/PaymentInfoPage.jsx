import PaymentInfo from "../Components/PaymentInfo";
import { useContext } from "react";
import CartContext from "../context/Cart";

function PaymentInfoPage() {

    const { cartTotalPrice } = useContext(CartContext);


    return (
        <div>
            <PaymentInfo />
        </div>
    )
}

export default PaymentInfoPage;