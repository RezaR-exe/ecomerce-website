import { useState, createContext, useEffect } from "react";
import PS5 from "../photos/tech/ps5.jpeg"
import PRO15 from "../photos/tech/15pro.jpeg"
import aw9 from "../photos/tech/aw9.jpeg"
import awultra from "../photos/tech/awultra.jpeg"
import garmin7 from "../photos/tech/garmin7.jpeg"
import mac from "../photos/tech/mac.jpeg"
import rog from "../photos/tech/rog.jpeg"
import rtx4090 from "../photos/tech/rtx4090.jpeg"
import airforce from "../photos/clothes/airforce-1/1.jpeg"
import mensjacket from "../photos/clothes/mens-jacket/1.jpeg"
import womenssandals from "../photos/clothes/womens-sandals/1.jpeg"
import mensjeans from "../photos/clothes/mens-jeans/1.jpeg"



const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0)


    const items = [
        {image: PS5, type: "tech", title: "Playstation 5 Console", description: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Released in November 2020, it is the successor to the PlayStation 4 and is part of the ninth generation of video game consoles.", options: ["disk", "no disk"], price: 2500, id: 1, quantity: 1},
        {image: PRO15, type: "tech", title: "iPhone 15 Pro Max", description: "The iPhone 15 Pro Max is Apple's flagship smartphone released in 2023. It features a sleek titanium design, a 6.7-inch Super Retina XDR display with ProMotion technology, and the powerful A17 Bionic chip. The device boasts an advanced camera system with improved low-light performance and enhanced zoom capabilities, making it ideal for photography enthusiasts. It also supports USB-C connectivity, offers all-day battery life, and runs on iOS 17, providing a seamless and secure user experience with the latest features and enhancements.", options: ["256 GB", "512 GB", "1 TB"], price: 2900, id: 2, quantity: 1},
        {image: airforce, type: "clothes", title: "Nike AirForce 1 Low", description: "Originally designed for performance hoops, the Air cushioning delivers lasting comfort. Rubber outsole with heritage hoops pivot circles adds traction and durability. Low-cut, padded collar looks sleek and feels great.", options: ["Size 9", "Size 9.5", "Size 10", "Size 10.5", "Size 11", "Size 11.5", "Size 12", "Size 12.5", "Size 13", "Size 13.5"], price: 10000, id: 3, quantity: 1},
        {image: aw9, type: "tech", title: "Apple Watch 9 GPS + Cellular", description: "The Apple Watch Series 9, released in 2023, features a sleek and durable design with an always-on Retina display that's brighter and more energy-efficient. Powered by the new S9 chip, it offers faster performance and improved battery life. The Series 9 includes enhanced health and fitness tracking capabilities, such as blood oxygen monitoring, ECG, and advanced workout metrics. It also introduces new gesture controls and expanded connectivity options. Running on watchOS 10, it provides a seamless user experience with updated apps and customizable watch faces, making it an essential companion for health, fitness, and connectivity.", options: ["41 mm", "45 mm"], price: 5000, id: 4, quantity: 1},
        {image: awultra, type: "tech", title: "Apple Watch Ultra GPS + Cellular", description: "Introducing the Apple Watch Ultra Series, the pinnacle of wearable technology. With its sleek design and cutting-edge features, this series takes smartwatches to a whole new level. Equipped with advanced health monitoring sensors, including ECG, blood oxygen, and sleep tracking, it helps you stay on top of your well-being like never before. The Ultra Series boasts a stunning Always-On Retina display with ProMotion technology, providing crisp visuals and smooth performance. With built-in GPS and cellular connectivity, you can stay connected and track your activities wherever you go. Plus, with the latest watchOS, you'll enjoy seamless integration with your favorite apps and services. Elevate your lifestyle with the Apple Watch Ultra Series.", options: ["49 mm"], price: 2500, id: 15, quantity: 1},
        {image: garmin7, type: "tech", title: "Garmin fenix 7 Pro", description: "The Garmin Fenix 7 is a high-performance multisport GPS smartwatch designed for athletes and outdoor adventurers. Released in 2022, it features a rugged, durable design with a 1.3-inch always-on display and various size options. The Fenix 7 offers advanced health and fitness tracking, including heart rate monitoring, VO2 max, sleep tracking, and comprehensive activity profiles for running, cycling, swimming, and more. It includes built-in topographic maps, multi-GNSS support, and solar charging options for extended battery life. With smart notifications, music storage, and Garmin Pay, it combines advanced sports tracking with everyday smartwatch functionality.", options: ["X size (51mm)", "Normal size (47mm)"], price: 2500, id: 5, quantity: 1},
        {image: mac, type: "tech", title: "Macbook Pro M1 Max", description: "The MacBook Pro with the M1 Max processor is Apple's high-performance laptop, designed for professional users who need top-tier processing power and graphics capabilities. Released in late 2021, it features a 14-inch or 16-inch Liquid Retina XDR display with stunning brightness and contrast. The M1 Max chip offers unparalleled performance with a 10-core CPU, up to 32-core GPU, and up to 64GB of unified memory, making it ideal for demanding tasks like video editing, 3D rendering, and software development. The laptop also boasts an improved thermal design for sustained performance, an advanced six-speaker sound system, and an array of ports including HDMI, Thunderbolt 4, and an SD card slot. Running macOS, it delivers an exceptional combination of power, efficiency, and versatility for professionals.", options: ["1 TB", "2TB", "4TB", "8TB"], price: 2500, id: 6, quantity: 1},
        {image: rog, type: "tech", title: "Asus ROG Strix Gaming Laptop", description: "The ASUS ROG Strix gaming laptop with RTX 4090 is a top-tier gaming machine designed for serious gamers and content creators. It features a powerful NVIDIA GeForce RTX 4090 GPU, delivering exceptional graphics performance for the latest AAA games and intensive creative applications. The laptop boasts a high-refresh-rate display (up to 360Hz) for smooth and immersive visuals. Powered by the latest Intel or AMD processors, it ensures fast and efficient multitasking. The ROG Strix includes advanced cooling technology to maintain optimal performance, customizable RGB lighting, and robust build quality. With ample connectivity options and a sleek, gamer-centric design, it is built to deliver a superior gaming experience.", options: ["RTX 4070", "RTX 4080", "RTX 4090"], price: 2500, id: 7, quantity: 1},
        {image: rtx4090, type: "tech", title: "nVidia Geforce RTX 4090", description: "The NVIDIA GeForce RTX 4090 is a cutting-edge graphics card, part of the RTX 40 series, designed for extreme gaming and high-performance computing. Released in 2022, it features the advanced Ada Lovelace architecture, offering significant improvements in ray tracing, AI-driven graphics, and overall performance. With 24GB of GDDR6X memory, the RTX 4090 provides unparalleled speed and efficiency, supporting 4K and even 8K gaming at high frame rates. It includes technologies like DLSS 3.0 for enhanced visual fidelity and frame rates, and is equipped with multiple display outputs for versatile connectivity. The RTX 4090 is ideal for gamers, creators, and professionals seeking the best in graphical performance and innovation.", options: ["LHR", "NON-LHR"], price: 2500, id: 8, quantity: 1},
        {image: mensjacket, type: "clothes", title: "Black Denim Jacket", description: "Upgrade your wardrobe with our classic men's black denim jacket. Crafted from high-quality, durable denim, this jacket features a timeless design with a modern fit. It includes two chest pockets with button closures and side pockets for added convenience. The jacket's versatile style makes it perfect for layering over a t-shirt or hoodie, offering a cool, effortless look for any occasion. Whether you're dressing up for a night out or keeping it casual, this black denim jacket is a must-have staple for every man's closet. Available in sizes S to XXL.", options: ["S", "M", "L", "XL", "XXL"], price: 2500, id: 9, quantity: 1},
        {image: womenssandals, type: "clothes", title: "Brown Colored Sandals", description: "Step into style and comfort with our women's brown colored sandals. These chic sandals feature a sleek, minimalist design with adjustable straps for a perfect fit. Made from high-quality, durable materials, they provide lasting comfort and support, ideal for all-day wear. The neutral brown color pairs effortlessly with any outfit, making them a versatile addition to your wardrobe. Whether you're heading to the beach, a casual outing, or a summer party, these sandals will keep you looking fashionable and feeling great. Available in sizes 5 to 11.", options: ["Size 5", "Size 5.5", "Size 6", "Size 6.5", "Size 7", "Size 7.5", "Size 8", "Size 8.5", "Size 9", "Size 9.5"], price: 2500, id: 10, quantity: 1},
        {image: mensjeans, type: "clothes", title: "Black Denim Jeans", description: "Elevate your everyday look with our men's black denim jeans. Crafted from premium stretch denim, these jeans offer both comfort and style. Featuring a modern slim fit, they provide a sleek silhouette that flatters any body type. The classic five-pocket design and sturdy zipper fly make these jeans as functional as they are fashionable. Perfect for any occasion, they can be dressed up with a blazer or kept casual with a t-shirt. Durable and versatile, these black denim jeans are a must-have staple in every man's wardrobe. Available in sizes 28 to 40.", options: ["Size 28", "Size 29", "Size 30", "Size 31", "Size 32", "Size 33"], price: 2500, id: 11, quantity: 1},
    ]

    const handleAddToCart = (itemObject) => {
        if (cartItems.length > 0) {
            let newList = [...cartItems];
            for (let i=0;i<newList.length;i++) {
                if (itemObject.id === newList[i].id) {
                    newList[i] = {...itemObject, quantity: newList[i].quantity +1}
                    setCartItems(newList)
                    break
                } else {
                    setCartItems([...newList, itemObject])
                }
            }
        } else {
            setCartItems([...cartItems, itemObject])
        }
    }

    const removeFromCart = (itemObject) => {
        const editedCartItems = cartItems.filter(item => itemObject.id !== item.id)
        setCartItems(editedCartItems)
    }

    const handleCartPrice = () => {
        if (cartItems.length === 0) {
            setCartTotalPrice(0)
        } else {
            const itemPrices = cartItems.map(item => item.price*item.quantity)
            const total = itemPrices.reduce((acc, curr) => acc + curr)
            setCartTotalPrice(total)
        }
    }

    const handleItemQuantityChange = (event, itemObject) => {
        if (event.target.id === "plus") {
            let newList = [...cartItems];
            for (let i = 0; i<newList.length; i++) {
                if (itemObject.id === newList[i].id) {
                    newList[i] = {...itemObject, quantity: newList[i].quantity + 1}
                    setCartItems(newList)
                    break
                }
            }
        } else if (event.target.id === "minus") {
            if (itemObject.quantity <= 1) {
                removeFromCart(itemObject)
            } else {
                let newList = [...cartItems];
                for (let i = 0; i<newList.length; i++) {
                    if (itemObject.id === newList[i].id) {
                        newList[i] = {...itemObject, quantity: newList[i].quantity - 1}
                        setCartItems(newList)
                        break
                    }
                }
            }
        }
    }

    useEffect(() => {
        handleCartPrice()
    }, [cartItems])

    return (
        <CartContext.Provider value={{cartItems, cartTotalPrice, items, handleCartPrice, handleAddToCart, removeFromCart, handleItemQuantityChange}}>
            {children}
        </CartContext.Provider>
    )

}


export { CartContextProvider };
export default CartContext;