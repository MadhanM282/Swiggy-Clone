export const CART = "CART";
export const CART_INCREMENT = "CART_INCREMENT";
export const CART_DECREMENT = "CART_DECREMENT";

export const CartAction = (data) => ({ type: CART, payload: data });
export const CartDecrement = (data) => ({
  type: CART_DECREMENT,
  payload: data,
});
export const CartIncrement = (data) => ({
  type: CART_INCREMENT,
  payload: data,
});

