import React from "react";
import { IconImg, OfferHeaderDiv } from "../../Styles/RestaurantPage";

export default function OfferHeader() {
  return (
    <OfferHeaderDiv>
      <h4>Offer</h4>
      <h6>
        <IconImg src="https://img.icons8.com/ios-filled/54/8a584b/discount--v1.png" />  20% off up to ₹125 | Use KOTAK125 Above
        ₹500`
      </h6>
    </OfferHeaderDiv>
  );
}
