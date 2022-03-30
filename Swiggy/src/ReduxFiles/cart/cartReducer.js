import { CART } from "./cartAction";
const initial = {
    cart:[
        {
            name:"biryani",
            price:200,
            type:"veg"
        }
    ]
};
export const CartReducer = (store=initial,{type,payload})=>{
    switch(type){
        case CART : return{...store,cart:payload}
        // case DELETE_ITEM:
        //  return {
        //    ...store,
        //    cart: store.cart.filter((item, index) => index !== payload)
        //  }
         default: return store

    }
}