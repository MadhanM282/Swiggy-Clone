import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux"
import { Log, LogsDiv, Main } from "../../Styles/cart";
import { Address } from "./Address/Address";
import { SuccessAddress } from "./Address/AddressSuccess";
import { Empty } from "./Empty";
import { ListData } from "./List/List";
import { Logged } from "./logstatcomponents/loggedin";
import { Not_Logged } from "./logstatcomponents/notloggedin";

export const Cart = () => {
    
    // const [cart,setCart] = useState()
    // const [login,setLogin] = useState(false)
    // const [address,setAddress] = useState(false)
    // const [pay,setPay] = useState(false)
    const { cart } = useSelector((store) => store.cart)
    const { login, address, payment } = useSelector((store) => store.Stat)
    // const len = cart.length
    console.log('cart', cart);
    return (
        <Main>
            <LogsDiv>
                <Log>{login ? <Logged/> : <Not_Logged/>} </Log>
                {address?<SuccessAddress/>:<Address />}
            </LogsDiv>
            <Box sx={{backgroundColor: 'white',height:"540px" ,border:1,width:"25%",mt:"30px"}}>
                <ListData/>
            </Box>
        </Main>
    )
}