import React from "react";
import { ItemDisplayDiv } from "../../Styles/RestaurantPage";

export default function ItemDisplay(Props) {
  return (
    <ItemDisplayDiv>
      {/* {Props.item.map((e) => {
        return ( */}
      <div>
        <div>
          <h4>{Props.type}</h4>
          <h4>{Props.name}</h4>
          <p>{Props.price}</p>
        </div>
        <img src={Props.image} alt="image" />
        <button>Add</button>
      </div>
    </ItemDisplayDiv>
  );
}
