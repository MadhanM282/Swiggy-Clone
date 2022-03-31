export const CART = "CART";
export const LOG_STAT = "LOG_STAT";
export const ADDRESS_STAT = "ADDRESS_STAT";
export const PAYMENT_STAT = "PAYMENT_STAT";

export const CartAction = (data) => ({ type: CART, payload: data });

export const LogStat = () => ({ type: LOG_STAT });

export const AddressStat = () => ({ type: ADDRESS_STAT });

export const PaymentStat = () => ({ type: PAYMENT_STAT });



// export const CartRemove = (data)=>({type:CART,payload:data});