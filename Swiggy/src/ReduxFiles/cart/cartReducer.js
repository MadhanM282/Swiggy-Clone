import {
  ADDRESS_STAT,
  LOG_STAT,
  PAYMENT_STAT,
  RESIMG,
  RESNM,
} from "./cartAction";
const initial = {
  login: false,
  address: false,
  payment: false,
};
export const StatReducer = (store = initial, { type, payload }) => {
  switch (type) {
    case LOG_STAT:
      return { login: true, address: false, payment: false };
    case ADDRESS_STAT:
      return { address: true, login: true, payment: false };
    case PAYMENT_STAT:
      return { payment: true };
    case RESIMG:
      return { restaurentImg: payload };
    case RESNM:
      return { restaurentName: payload };

    default:
      return store;
  }
};
