import { RESTAURANT } from "./RestaurantAction";

const initial = {
  restaurantData: {},
};

export const RestaurantReducer = (store = initial, { type, payload }) => {
  switch (type) {
    case RESTAURANT:
      return { restaurantData: payload };

    default:
      return store;
  }
};
