import React from "react";
import { ItemTypeDiv } from "../../Styles/RestaurantPage";

export default function ItemType(Props) {
  return (
    <ItemTypeDiv>
      <ul>
        <li>
          {Props.item.map((item) => {
            return <div>{item}</div>;
          })}
        </li>
      </ul>
    </ItemTypeDiv>
  );
}
