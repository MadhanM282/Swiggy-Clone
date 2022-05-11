import { DATA, ERROR_STAT, Loading } from "./HomeAction";

// import { ADDRESS_STAT, CART, LOG_STAT, PAYMENT_STAT } from "./cartAction";
const initial = {
  Loading: false,
  Error: false,
};
export const HomeReducer = (store = initial, { type, payload }) => {
  switch (type) {
    case DATA:
      return { loading: false };
    case Loading:
      return { loading: true };
    case ERROR_STAT:
      return { loading: false, Error: true };
    default:
      return store;
  }
};
