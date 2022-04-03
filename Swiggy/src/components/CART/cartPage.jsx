import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux"
import { Log, LogsDiv, Main } from "../../Styles/cart";
import { Address } from "./Address/Address";
import { SuccessAddress } from "./Address/AddressSuccess";
import { Dummy } from "./Address/Dummy";
import { Empty } from "./Empty";
import { ListData } from "./List/List";
import { Logged } from "./logstatcomponents/loggedin";
import { Not_Logged } from "./logstatcomponents/notloggedin";
import { Pay } from "./Payment/Detail";
import { DummyP } from "./Payment/Dummy";

export const Cart = () => {
    const { cart } = useSelector((store) => store.cart)
    const { login, address, payment } = useSelector((store) => store.Stat)
    // const len = cart.length
    console.log('cart', cart);
    return cart.length===0? <Empty/>: (
        <Main>
            <LogsDiv>
                <Log>{!login ? <Logged/> : <Not_Logged/>} </Log>
                {login? <Dummy/> :address?<SuccessAddress/>:<Address />}
                {!address?<DummyP/>:<Pay/>}
            </LogsDiv>
            <Box sx={{backgroundColor: 'white',height:"540px" ,width:"25%",mt:"30px"}}>
                <ListData/>
            </Box>
        </Main>
    )
}