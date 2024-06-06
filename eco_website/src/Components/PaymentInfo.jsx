import { useState } from "react";



function PaymentInfo() {

    const [cardPayPopup, setCardPayPopup] = useState(false);
    const [cashPayPopup, setCashPayPopup] = useState(false);

    const handleCardPayPopup = () => {
        setCashPayPopup(false)
        cardPayPopup ? setCardPayPopup(false) : setCardPayPopup(true)
    }

    const handleCashPayPopup = () => {
        setCardPayPopup(false)
        cashPayPopup ? setCashPayPopup(false) : setCashPayPopup(true)
    }

    const cardInfo = <div className="flex flex-col">
        <label htmlFor="cNumber">Card Number</label>
        <input className="border border-black" id="cNumber" type="text" required />
        <label htmlFor="cExpiration">Expiration Date</label>
        <input className="border border-black" id="cExpiration" type="text" required />
        <label htmlFor="cSecurity">Security Code</label>
        <input className="border border-black" id="cSecurity" type="text" required />
    </div>

    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "345px"}} className="flex flex-col items-center [&>*]:border [&_*]:border-black [&>*]:p-2 [&>*]:m-2 [&>*]:w-80 mt-64">
                    Payment Info
                <div onClick={handleCashPayPopup}>
                    Pay Cash On Delivery {cashPayPopup ? "Selected" : "Not Selected"}
                </div>
                <div>
                    <button onClick={handleCardPayPopup}>Pay Card</button>
                    {cardPayPopup ? cardInfo : null}
                </div>
                <button className="border border-green-700 rounded text-white bg-green-700">Submit</button>
            </div>
        </form>

    )
}

export default PaymentInfo;