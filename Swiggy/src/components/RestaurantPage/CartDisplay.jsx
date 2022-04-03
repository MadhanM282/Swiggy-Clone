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
    return state.cart.cart;
  });

  // const subtotal = (cart) => {
  //   console.log("cart", cart);
  // };

  return (
    <CartDisplayDiv>
      <h2>Cart</h2>
      <ul className="list_style_none">
        {cart.map((item) => {
          return (
            <li>
              <Row>
                <span>{item.name}</span>
                <Minus>-</Minus>
                <One>{1}</One>
                <Plus>+</Plus>
                <span>{`₹${item.price}`}</span>
              </Row>
            </li>
          );
        })}
      </ul>

      <CartTotal>
        <h5>Subtotal</h5>
        {/* <h3>{total}</h3> */}
      </CartTotal>
      <p>Extra charges may apply</p>
      <Checkout>Checkout</Checkout>
    </CartDisplayDiv>
  );
}
