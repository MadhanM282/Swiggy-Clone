import React from "react";
import { ItemTypeDiv, ItemTypeList } from "../../Styles/RestaurantPage";

export default function ItemType(Props) {
  return (
    <ItemTypeDiv className="list_style_none">
      {Props.item.map((item) => {
        return (
          <ItemTypeList
            key={item._id}
            isActive={item === Props.selectedCategory}
            onClick={() => {
              Props.onClick(item);
            }}
          >
            <p>{item}</p>
          </ItemTypeList>
        );
      })}
    </ItemTypeDiv>
  );
}
