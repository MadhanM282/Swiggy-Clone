import { useSelector } from "react-redux"
import { Main } from "../../Styles/cart";
import { Empty } from "./Empty";

export const Cart= ()=>{
    const {cart,login,address,payment} = useSelector((store)=>store.cart)
    const len = 0 // cart.length
    console.log('cart', cart);
    return len===0?<Empty/>:(
        <Main>
             <div>
                 {/* {login?} */}
             </div>
             <div>
                list
             </div>
        </Main>
    )
}