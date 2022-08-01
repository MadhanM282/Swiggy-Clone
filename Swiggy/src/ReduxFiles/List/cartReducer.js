import { CART, CART_INCREMENT, CART_DECREMENT } from "./cartAction";
const initial = {
  cart: [],
};
export const CartReducer = (store = initial, { type, payload }) => {
  switch (type) {
    case CART:
      return { ...store, cart: [...store.cart, payload] };

    case CART_DECREMENT:
      const filteredDec = store.cart.filter((elem) => {
        return elem._id !== payload._id;
      });

      if (payload.quantity < 1) {
        return { ...store, cart: [...filteredDec] };
      } else {
        return { ...store, cart: [...filteredDec, payload] };
      }

    case CART_INCREMENT:
      const filteredInc = store.cart.filter((elem) => {
        return elem._id !== payload._id;
      });

      return { ...store, cart: [...filteredInc, payload] };

    default:
      return store;
  }
};
