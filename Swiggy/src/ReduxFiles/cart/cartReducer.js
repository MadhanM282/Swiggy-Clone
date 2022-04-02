import { ADDRESS_STAT, CART, LOG_STAT, PAYMENT_STAT } from "./cartAction";
const initial = {
    restaurent: [{ restaurent: "Alpha", image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/xgus21ov1ncd3shvvvgc" }],
    cart: [
        {

            name: "biryani",
            price: 200,
            type: "veg",

        }
    ],
    login: false,
    address: false,
    payment: false
};
export const CartReducer = (store = initial, { type, payload }) => {
    switch (type) {
        case CART: return { ...store, cart: [...store.cart, payload] };
        case LOG_STAT: return { login: true, address: false, payment: false };
        case ADDRESS_STAT: return { address: true, login: true, payment: false };
        case PAYMENT_STAT: return { payment: true };
        default: return store
    }
}