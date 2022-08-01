import React from "react";
import { InfoDiv, ExtraInfoDiv, IconDiv } from "../../Styles/RestaurantPage";

export default function RestaurantInfo(Props) {
  return (
    <div>
      <InfoDiv>
        <div>
          <h1>{Props.name}</h1>
          <p>{Props.cusines}</p>
          <p>{Props.address}</p>
          <ExtraInfoDiv>
            {Props.infoArray.map((item, index) => {
              return (
                <ul key={index}>
                  <li className="list_style_none">
                    <IconDiv>
                      <img src={item.icon} />
                      <h6>{item.value}</h6>
                      {index === 1 ? <h6> mins</h6> : null}
                    </IconDiv>

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
