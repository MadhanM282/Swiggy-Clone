import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

// import { useStyles } from "../../Styles/Restaurentpage";
import HeaderImg from "./HeaderImg";
import RestaurantInfo from "./RestaurantInfo";
import OfferHeader from "./OfferHeader";
import ItemType from "./ItemType";
import ItemDisplay from "./ItemDisplay";
import CartDisplay from "./CartDisplay";
import { SelectedItemHeading } from "../../Styles/RestaurantPage";
import { useSelector } from "react-redux";
import Footer from "../Finalfooter/footer";

const useStyles = makeStyles({
  Wrapper: {
    display: "flex",
    padding: "20px 100px ",
    background: "#171a29",
    color: "white",
    alignItems: "center",
    fontSize: "13px",
  },
  RestaurantNameWrapper: {
    margin: "0 55px",
    color: "white",
  },

  LowerDivWrapper: {
    display: "flex",
    margin: "auto",
  },

  DishesList: {
    maxHeight: "calc(100vh - 380px)",
  },
});

export const Restaurent = () => {
  const restaurantData = useSelector((state) => {
    return state.restaurant.restaurantData;
  });

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
      // console.log(res.data);
    });
  }, []);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <div className={`${classes.Wrapper}`}>
        <HeaderImg image={restaurantData.img_url} />
        <RestaurantInfo
          className={`${classes.RestaurantNameWrapper}`}
          name={restaurantData.name}
          cusines={restaurantData.cuisines.join(", ")}
          address={restaurantData.geometry}
          infoArray={[
            { key: "Ratings", value: restaurantData.rating },
            { key: "Delivery time", value: restaurantData.average_time },
            { key: "Cost for two", value: restaurantData.average_cost },
          ]}
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
          <ul
            className={`list_style_none overflow_scroll ${classes.DishesList}`}
          >
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
      <br/>
      <br/>
      <br/>
    <Footer/>
    </div>
  );
};
