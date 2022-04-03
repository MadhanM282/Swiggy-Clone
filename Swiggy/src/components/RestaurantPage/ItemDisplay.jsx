import React from "react";
import { useDispatch } from "react-redux";
import { CartAction } from "../../ReduxFiles/List/cartAction";
import {
  ItemDisplayDiv,
  Row,
  Column,
  AddBtn,
  ItemImg,
  CustomP,
  ItemDesc,
} from "../../Styles/RestaurantPage";

export default function ItemDisplay(Props) {
  const dispatch = useDispatch()
  return (
    <ItemDisplayDiv>
      {/* {Props.item.map((e) => {
        return ( */}
      {/* <h2>{Props.category}</h2> */}
      <ItemDesc>
        <div>
          <h4>{Props.type}</h4>
          <h6>{Props.name}</h6>
          <p>{`₹${Props.price}`}</p>
        </div>
        <Column>
          <ItemImg src={Props.image} alt="image" />
          <AddBtn onClick={()=>dispatch(CartAction(Props))}>Add</AddBtn>
          <CustomP>Customisable</CustomP>
        </Column>
      </ItemDesc>
    </ItemDisplayDiv>
  );
}
