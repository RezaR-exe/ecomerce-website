function ItemCartShow({ item }) {
    return (
        <div className="flex border rounded bg-white p-15px md:px-16px h-full m-4 p-4 justify-between">
        <div>
        <img className="max-w-12" src={item.image} alt="" />
            <h1>{item.title}</h1>
            <h3>Quantity: {item.quantity}</h3>
        </div>
            
            <h3 className="ml-60">{item.price}</h3>
        </div>
    )
}

export default ItemCartShow;