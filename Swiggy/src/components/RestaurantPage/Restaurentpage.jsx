import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { makeStyles } from "@mui/styles";

// import { useStyles } from "../../Styles/Restaurentpage";
import HeaderImg from "./HeaderImg";
import RestaurantName from "./RestaurantInfo";
import OfferHeader from "./OfferHeader";
import ItemType from "./ItemType";
import ItemDisplay from "./ItemDisplay";
import CartDisplay from "./CartDaisplay";
import { SelectedItemHeading } from "../../Styles/RestaurantPage";

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
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  const filterCategory = (selectedCategory) => {
    const filterDishes = dishes.filter((item) => {
      return item.category === selectedCategory;
    });

    setFilteredDishes(filterDishes);
  };

  useEffect(() => {
    axios.get("https://swiggy-list.herokuapp.com/item").then((res) => {
      setDishes(res.data);
      setFilteredDishes(res.data);
      const newCategories = res.data.reduce((ac, cv) => {
        if (!ac.includes(cv.category)) {
          ac.push(cv.category);
        }
        return ac;
      }, []);
      setCategories(newCategories);
      setSelectedCategory(newCategories[0]);
      console.log(res.data);
    });
  }, []);

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
        <ItemType
          selectedCategory={selectedCategory}
          item={categories}
          onClick={(data) => {
            setSelectedCategory(data);
            filterCategory(data);
          }}
        />
        <div>
          <SelectedItemHeading>{selectedCategory}</SelectedItemHeading>
          <ul className="list_style_none">
            {filteredDishes.map((item) => {
              return (
                <li key={item._id}>
                  <ItemDisplay
                    veg={item.veg}
                    name={item.name}
                    price={item.price}
                    image={item.img_url}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <CartDisplay />
      </div>
    </div>
  );
};
