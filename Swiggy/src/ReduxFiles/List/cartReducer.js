import { CART } from "./cartAction";
const initial = {
   
    cart: [
        {

            name: "biryani",
            price: 500,
            type: "veg",

        },
        {

            name: "biryani",
            price: 200,
            type: "veg",

        }
    ]

};
export const CartReducer = (store = initial, { type, payload }) => {
    switch (type) {
        case CART: return { ...store, cart: [...store.cart, payload] };
        
        default: return store
    }
}