import React from "react";
import { InfoDiv, ExtraInfoDiv } from "../../Styles/RestaurantPage";

export default function RestaurantInfo(Props) {
  return (
    <div>
      <InfoDiv>
        <div>
          <h1>{Props.name}</h1>
          <h4>{Props.cusines}</h4>
          <h4>{Props.address}</h4>
          <ExtraInfoDiv>
            {[1, 2, 3].map((item) => {
              return (
                  <ul><li>
                  <div>4.4</div>
                  <div>Ratings</div>
                </li></ul>
                
              );
            })}
          </ExtraInfoDiv>
        </div>
      </InfoDiv>
    </div>
  );
}
