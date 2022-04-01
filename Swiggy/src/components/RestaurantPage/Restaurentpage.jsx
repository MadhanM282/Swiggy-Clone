import React from "react";
import axios from "axios";


import { makeStyles } from "@mui/styles";

// import { useStyles } from "../../Styles/Restaurentpage";
import HeaderImg from "./HeaderImg";
import RestaurantName from "./RestaurantInfo";
import OfferHeader from "./OfferHeader";
import ItemType from "./ItemType";
import ItemDisplay from "./ItemDisplay";
import CartDisplay from "./CartDaisplay";

const useStyles = makeStyles({
  Wrapper: {
    display: "flex",
    padding: "20px 100px ",
    background: "#171a29",
    color: "white",
    alignItems: "center",
  },
  RestaurantNameWrapper: {
    margin: "0 55px",
    color: "white",
  },

  LowerDivWrapper: {
    display: "flex",
    margin: "auto",
  },
});
export const Restaurent = () => {

  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.Wrapper}`}>
        <HeaderImg image="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg" />
        <RestaurantName
          className={`${classes.RestaurantNameWrapper}`}
          name="Om Sweet Shop"
          cusines="North Indian, Italian"
          address="KB Nagar, XYZ"
          infoArray="[1,2,3]"
        />
        <OfferHeader />
      </div>
      <div className={`${classes.LowerDivWrapper}`}>
        <ItemType item={[1, 2, 3, 4, 5]} />
        <ItemDisplay
          category="North Indian"
          type="veg"
          name="Razma Chawal"
          price="400"
          image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h"
        />
        <CartDisplay />
      </div>
    </div>
  );
};
