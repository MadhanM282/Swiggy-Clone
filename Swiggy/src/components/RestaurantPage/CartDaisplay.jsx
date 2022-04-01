import React from "react";
import { CartDisplayDiv } from "../../Styles/RestaurantPage";
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
  return (
    <CartDisplayDiv>
      <h2>Cart</h2>
      <Row>
        <span>no. of item</span>
        <Minus>-</Minus>
        <One>1</One>
        <Plus>+</Plus>
        <span>Price</span>
      </Row>
      <CartTotal>
        <h3>Subtotal</h3>
        <h3>Rupees</h3>
      </CartTotal>
      <Checkout>Checkout</Checkout>
    </CartDisplayDiv>
  );
}
