import { useContext, useState } from "react";
import CartContext from "../context/Cart"
import Link from "../Link";


function Nav({ onCartClick }) {

    const { cartItems } = useContext(CartContext)



    const Links = [
        {label: "home", path: "/home"},
        {label: "cart", path: "/cart"},
        {label: "cart", path: "/cart"},
        {label: "cart", path: "/cart"},
        {label: "cart", path: "/cart"}
    ]

    const renderedLinks = Links.map((link) => {
        return <Link to={link.path} key={link.label}>{link.label}</Link>
    })


    return(
            <nav className="bg-green-700 top-0 h-20">
            <div className="flex justify-between">
                <div className="flex m-2 mt-6 [&_*]:ml-4 [&_*]:text-white">
                        <strong className="text-xl"><h1>EcoFlex</h1></strong>
                        <Link to="/">Home</Link>
                        <Link to="/tech">Tech</Link>
                        <Link to="/clothes">Clothes</Link>
                    </div>
                    <div className="p-2 mt-3 [&_*]:text-white">
                        <a onClick={onCartClick} className="p-2 m-2" href="#">My Cart {`(${cartItems.length})`}</a>
                    </div>
            </div>
            </nav>
    )
}

export default Nav;