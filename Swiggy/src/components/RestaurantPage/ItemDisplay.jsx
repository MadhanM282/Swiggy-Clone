import React from "react";
import { useDispatch } from "react-redux";
import VegIcon from "../../../Icons/veg.png";
import NonVegIcon from "../../../Icons/non-veg.png";
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
  console.log("ItemDisplay", Props);
  return (
    <ItemDisplayDiv>
      {/* {Props.item.map((e) => {
        return ( */}
      {/* <h2>{Props.category}</h2> */}
      <ItemDesc>
        <div>
          <p>
            {Props.veg ? (
              <IconImg src={VegIcon} />
            ) : (
              <IconImg src={NonVegIcon} />
            )}
          </p>
          <h6>{Props.name}</h6>
          <p>{`₹${Props.price}`}</p>
        </div>
        <Column>
          <ItemImg src={Props.image} alt="image" />
          <AddBtn onClick={() => dispatch(CartAction(Props))}>Add</AddBtn>
          <CustomP>Customisable</CustomP>
        </Column>
      </ItemDesc>
    </ItemDisplayDiv>
  );
}
