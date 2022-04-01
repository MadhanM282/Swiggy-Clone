import { useSelector } from "react-redux"
import { Log, LogsDiv, Main } from "../../Styles/cart";
import { Address } from "./Address/Address";
import { Empty } from "./Empty";
import { Logged } from "./logstatcomponents/loggedin";
import { Not_Logged } from "./logstatcomponents/notloggedin";

export const Cart = () => {
    const { cart, login, address, payment } = useSelector((store) => store.cart)
    // const len = cart.length
    console.log('cart', cart);
    return (
        <Main>
            <LogsDiv>
                <Log>{login ? <Logged /> : <Not_Logged />} </Log>
                <Address />
            </LogsDiv>
            <div>
                list
            </div>
        </Main>
    )
}