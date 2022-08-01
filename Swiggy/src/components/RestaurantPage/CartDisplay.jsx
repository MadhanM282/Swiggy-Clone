import React from "react";
import { CartDisplayDiv } from "../../Styles/RestaurantPage";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Minus,
  Quantity,
  Plus,
  Checkout,
  CartTotal,
} from "../../Styles/RestaurantPage";
import { CartDecrement, CartIncrement } from "../../ReduxFiles/List/cartAction";

export default function CartDisplay() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  const sum = cart.reduce((ac, av) => {
    let temp = av.price * av.quantity;
    return ac + temp;
  }, 0);

  const handleCartDecrement = (item) => {
    let qty = item.quantity - 1;
    dispatch(CartDecrement({ ...item, quantity: qty }));
  };

  const handleCartIncrement = (item) => {
    let qty = item.quantity + 1;
    dispatch(CartIncrement({ ...item, quantity: qty }));
  };

  return (
    <CartDisplayDiv>
      <h2>Cart</h2>
      <ul className="list_style_none">
        {cart.map((item) => {
          return (
            <li key={item._id}>
              <Row>
                <span>{item.name}</span>
                <Minus onClick={() => handleCartDecrement(item)}>-</Minus>
                <Quantity>{item.quantity}</Quantity>
                <Plus onClick={() => handleCartIncrement(item)}>+</Plus>
                <span>{`₹${item.price}`}</span>
              </Row>
            </li>
          );
        })}
      </ul>

      <CartTotal>
        <h5>Subtotal</h5>
        <h5>{`₹${sum}`}</h5>
      </CartTotal>
      <p>Extra charges may apply</p>

      <Link to={"/cart"}>
        <Checkout>Checkout</Checkout>
      </Link>
    </CartDisplayDiv>
  );
}
