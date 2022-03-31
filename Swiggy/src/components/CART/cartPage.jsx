import { useSelector } from "react-redux"
import { Log, Main } from "../../Styles/cart";
import { Address } from "./Address";
import { Empty } from "./Empty";
import { Logged } from "./logstatcomponents/loggedin";
import { Not_Logged } from "./logstatcomponents/notloggedin";

export const Cart= ()=>{
    const {cart,login,address,payment} = useSelector((store)=>store.cart)
    const len =  cart.length
    console.log('cart', cart);
    return len===0?<Empty/>:(
        <Main>
             <div>
                 <Log>{login?<Logged/>:<Not_Logged/>} </Log>
                 <Address/>
             </div>
             <div>
                list
             </div>
        </Main>
    )
}