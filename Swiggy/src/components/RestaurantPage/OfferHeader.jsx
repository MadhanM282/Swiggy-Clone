import React from "react";
import DiscountIcon from "../../../Icons/discount.svg";
import { IconImg, OfferHeaderDiv } from "../../Styles/RestaurantPage";

export default function OfferHeader() {
  return (
    <OfferHeaderDiv>
      <h4>Offer</h4>
      <h6>
        <IconImg src={DiscountIcon} />  20% off up to ₹125 | Use KOTAK125 Above
        ₹500`
      </h6>
    </OfferHeaderDiv>
  );
}
