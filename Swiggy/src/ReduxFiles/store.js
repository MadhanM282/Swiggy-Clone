import { createStore, combineReducers } from "redux";
import { StatReducer } from "./cart/cartReducer";
import { HomeReducer } from "./Home/HomeReducer";
import { CartReducer } from "./List/cartReducer";
import { RestaurantReducer } from "./Restaurant/RestaurantReducer";

const Root = combineReducers({
  Stat: StatReducer,
  cart: CartReducer,
  home: HomeReducer,
  restaurant: RestaurantReducer,
});

export const STORE = createStore(
  Root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
