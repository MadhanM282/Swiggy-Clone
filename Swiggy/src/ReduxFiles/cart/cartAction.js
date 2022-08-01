
export const LOG_STAT = "LOG_STAT";
export const ADDRESS_STAT = "ADDRESS_STAT";
export const PAYMENT_STAT = "PAYMENT_STAT";
export const RESIMG = "RESIMG";
export const RESNM = "RESNM";



export const LogStat = () => ({ type: LOG_STAT });

export const AddressStat = () => ({ type: ADDRESS_STAT });

export const PaymentStat = () => ({ type: PAYMENT_STAT });

export const ResImg= (data)=>({type:RESIMG,payload:data})



export const Resname= (data)=>({type:RESNM,payload:data})



