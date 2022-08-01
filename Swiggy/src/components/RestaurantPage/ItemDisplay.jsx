import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartAction } from "../../ReduxFiles/List/cartAction";
import {
  ItemDisplayDiv,
  Row,
  Column,
  AddBtn,
  ItemImg,
  CustomP,
  ItemDesc,
  IconImg,
} from "../../Styles/RestaurantPage";

export default function ItemDisplay(Props) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cart);
  return (
    <ItemDisplayDiv>
      {/* {Props.item.map((e) => {
        return ( */}
      {/* <h2>{Props.category}</h2> */}
      <ItemDesc>
        <div>
          <p>
            {Props.veg ? (
              <IconImg src="https://img.icons8.com/ios-glyphs/30/26e07f/non-vegetarian-food-symbol.png" />
            ) : (
              <IconImg src="https://img.icons8.com/ios-glyphs/30/ed1c24/non-vegetarian-food-symbol.png" />
            )}
          </p>
          <h6>{Props.name}</h6>
          <p>{`₹${Props.price}`}</p>
        </div>
        <Column>
          <ItemImg src={Props.image} alt="image" />
          <AddBtn
            onClick={() => {
              dispatch(CartAction(Props));
            }}
          >
            Add
          </AddBtn>
          <CustomP>Customisable</CustomP>
        </Column>
      </ItemDesc>
    </ItemDisplayDiv>
  );
}
