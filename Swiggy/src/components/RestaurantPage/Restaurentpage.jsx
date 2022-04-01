import React from "react";

import { makeStyles } from "@mui/styles";

// import { useStyles } from "../../Styles/Restaurentpage";
import HeaderImg from "./HeaderImg";
import RestaurantName from "./RestaurantInfo";
import OfferHeader from "./OfferHeader";
import ItemType from "./ItemType";
import ItemDisplay from "./ItemDisplay";

const useStyles = makeStyles({
  Wrapper: {
    display: "flex",
    padding: "16px 100px ",
    background: "#171a29",
    color: "white",
  },
  RestaurantNameWrapper: {
    margin: "0 55px",
    color: "white",
  },

  LowerDivWrapper: {
    display: "flex",
  },
});

export const Restaurentpage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.Wrapper}`}>
        <HeaderImg />
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
          type="veg"
          name="Razma Chawal"
          price="400"
          image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bmwn4n4bn6n1tcpc8x2h"
        />
      </div>
      <div></div>
    </div>
  );
};
