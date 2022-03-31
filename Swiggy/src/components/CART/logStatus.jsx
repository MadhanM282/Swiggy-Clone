import { useSelector } from "react-redux"

export const LoginStat = ()=>{
    const {cart,login,address,payment} = useSelector((store)=>store.cart)
    // return login?
}