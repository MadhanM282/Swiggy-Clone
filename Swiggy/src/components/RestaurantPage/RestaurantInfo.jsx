import React from "react";
import { InfoDiv, ExtraInfoDiv } from "../../Styles/RestaurantPage";

export default function RestaurantInfo(Props) {
  console.log(Props);
  return (
    <div>
      <InfoDiv>
        <div>
          <h1>{Props.name}</h1>
          <p>{Props.cusines}</p>
          <p>{Props.address}</p>
          <ExtraInfoDiv>
            {Props.infoArray.map((item) => {
              return (
                <ul>
                  <li className="list_style_none">
                    <h6>{item.value}</h6>
                    <p>{item.key}</p>
                  </li>
                </ul>
              );
            })}
          </ExtraInfoDiv>
        </div>
      </InfoDiv>
    </div>
  );
}
