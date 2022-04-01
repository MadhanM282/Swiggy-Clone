import React from "react";
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
  return (
    <ItemDisplayDiv>
      {/* {Props.item.map((e) => {
        return ( */}
      {/* <h2>{Props.category}</h2> */}
      <ItemDesc>
        <div>
          <h4>{Props.type}</h4>
          <h4>{Props.name}</h4>
          <p>{`₹${Props.price}`}</p>
        </div>
        <Column>
          <ItemImg src={Props.image} alt="image" />
          <AddBtn>Add</AddBtn>
          <CustomP>Customisable</CustomP>
        </Column>
      </ItemDesc>
    </ItemDisplayDiv>
  );
}
