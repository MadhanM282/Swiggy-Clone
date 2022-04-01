import { useSelector } from "react-redux"
import { Log, LogsDiv, Span1 } from "../../../Styles/cart"
import { SavedAddress } from "./savedAddress"

export const Address = ()=>{
    const { cart, login, address, payment } = useSelector((store) => store.cart)
    return (
        <Log>
            <SavedAddress/>
            {/* <h1> <Span1><img src="https://img.icons8.com/ios/344/ffffff/place-marker--v1.png" alt="" width="25px" /></Span1>{!login?"Delivery Address":address?""} </h1> */}
        </Log>
    )
}