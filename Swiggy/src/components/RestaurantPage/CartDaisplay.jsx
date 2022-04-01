import React from "react";
import { CartDisplayDiv } from "../../Styles/RestaurantPage";
import { useSelector } from "react-redux";
import {
  Row,
  Minus,
  One,
  Plus,
  Checkout,
  CartTotal,
} from "../../Styles/RestaurantPage";
// import { Minus } from "../../Styles/RestaurantPage";

export default function CartDisplay() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  console.log(cart)

  return (
    <CartDisplayDiv>
      <h2>Cart</h2>
      <ul className="list_style_none">
        {cart.cartItems.map((item) => {
          return (
            <li>
              <Row>
                <span>{item.name}</span>
                <Minus>-</Minus>
                <One>1</One>
                <Plus>+</Plus>
                <span>Price</span>
              </Row>
            </li>
          );
        })}
      </ul>

      <CartTotal>
        <h3>Subtotal</h3>
        <h3>Rupees</h3>
      </CartTotal>
      <Checkout>Checkout</Checkout>
    </CartDisplayDiv>
  );
}
