import { ADDRESS_STAT, CART, LOG_STAT, PAYMENT_STAT } from "./cartAction";
const initial = {
    cart: [
        {
            name: "biryani",
            price: 200,
            type: "veg"
        }
    ],
    login: false,
    address: false,
    payment: false
};
export const CartReducer = (store = initial, { type, payload }) => {
    switch (type) {
        case CART: return { ...store, cart: payload };
        case LOG_STAT: return { login: true };
        case ADDRESS_STAT: return { address: true };
        case PAYMENT_STAT: return { payment: true };
        default: return store

    }
}