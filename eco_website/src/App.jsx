import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useState, useContext } from "react"
import CartPopup from "./Components/CartPopup";
import Route from "./Route";
import CartPage from "./pages/CartPage";
import FrontPage from "./pages/FrontPage";
import ItemPage from "./pages/ItemPage";
import NavigationContext from "./context/Navigation";
import OrderInfoPage from "./pages/OrderInfoPage";
import PaymentInfoPage from "./pages/PaymentInfoPage";
import ClothesPage from "./pages/ClothesPage";
import TechPage from "./pages/TechPage";


function App() {
    const [showCart, setShowCart] = useState(false);
    const { itemToShow } = useContext(NavigationContext);

    const handleCartPopup = () =>{
        showCart ? setShowCart(false) : setShowCart(true)
    }

    return (
        <div>
            <Nav onCartClick={handleCartPopup} />
            <div className="inline-flex float-right m-4 max-h-80 overflow-y-scroll border border-black">{showCart ? <CartPopup /> : null}</div>
            <div>
                <Route path="/">
                    <FrontPage />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path={`/item-${itemToShow.id}`}>
                    <ItemPage item={itemToShow} />
                </Route>
                <Route path="/orderinfo">
                    <OrderInfoPage />
                </Route>
                <Route path="/paymentinfo">
                    <PaymentInfoPage />
                </Route>
                <Route path="/clothes">
                    <ClothesPage />
                </Route>
                <Route path="/tech">
                    <TechPage />
                </Route>
            </div>
            <Footer />
        </div>
    )
}

export default App;