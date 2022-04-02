import { createStore, combineReducers } from "redux";
import { CartReducer } from "./cart/cartReducer";
import { HomeReducer } from "./Home/HomeReducer";
import { RestaurantReducer } from "./Restaurant/RestaurantReducer";

const Root = combineReducers({
  cart: CartReducer,
  home: HomeReducer,
  restaurant: RestaurantReducer,
});

export const STORE = createStore(
  Root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
