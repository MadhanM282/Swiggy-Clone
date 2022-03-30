import { useSelector } from "react-redux"

export const Cart= ()=>{
    const {cart} = useSelector((store)=>store.cart)
    console.log('cart', cart);
    return(
        <div>
            
        </div>
    )
}