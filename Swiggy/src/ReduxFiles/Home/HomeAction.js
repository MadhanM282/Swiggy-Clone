export const Loading = "Loading";
export const ERROR_STAT = "ERROR_STAT";
export const DATA = "DATA"

export const Data = ()=> ({ type:DATA})

export const LoadingAction = () => ({ type: Loading});

export const ErrorAction = () => ({ type: ERROR_STAT });


// export const CartRemove = (data)=>({type:CART,payload:data});