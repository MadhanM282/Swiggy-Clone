import { CART } from "./cartAction";
const initial = {
   
    cart: [
        
    ]

};
export const CartReducer = (store = initial, { type, payload }) => {
    switch (type) {
        case CART: return { ...store, cart: [...store.cart, payload] };
        
        default: return store
    }
}