import Link from "../Link";
import NavigationContext from "../context/Navigation";
import { useContext } from "react";


function DeliveryInfo() {

    const { navigate } = useContext(NavigationContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/paymentinfo")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-4 m-4 [&_*]:m-4 [&_*]:w-80 items-center">
                <label htmlFor="fName"><strong>First Name</strong></label>
                <input className="border border-black rounded" id="fName" type="text" required />
                <label htmlFor="lName"><strong>Last Name</strong></label>
                <input className="border border-black rounded" id="lName" type="text" required />
                <label htmlFor="pNumber"><strong>Phone Number</strong></label>
                <input className="border border-black rounded" id="pNumber" type="text" required />
                <label htmlFor="city"><strong>City</strong></label>
                <input className="border border-black rounded" id="city" type="text" required />
                <label htmlFor="state"><strong>State</strong></label>
                <input className="border border-black rounded" id="state" type="text" required />
                <label htmlFor="street"><strong>Street</strong></label>
                <input className="border border-black rounded" id="street" type="text" required />
                <label htmlFor="full"><strong>Any More additional Information</strong></label>
                <textarea className="border border-black w-96 h-36 rounded" name="full" id="full"></textarea>
                <button className="border border-green-700 rounded text-white bg-green-700">Submit</button>
            </div>
        </form>
    )
}

export default DeliveryInfo;