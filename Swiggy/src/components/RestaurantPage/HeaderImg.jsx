import { propsToClassKey } from "@mui/styles";
import React from "react";
import { HeaderImage } from "../../Styles/RestaurantPage";

export default function HeaderImg(Props) {
  return <HeaderImage src={Props.image}></HeaderImage>;
}
