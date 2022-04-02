import { Box, Button, Checkbox, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

import { InputBox, P } from "../../../Styles/cart"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ListData = () => {
    const [chk, setChk] = useState(false)
    useEffect(() => {

        console.log('chk', chk);
    }, [label])
    const { cart, login, address, payment, restaurent } = useSelector((store) => store.cart)
    return (
        <Box sx={{ justifyContent: 'center' }}>
            <Box sx={{ boxShadow: 3, mt: "0px" }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: "50%", pt: "10px", pb: "10px" }}>
                    <img src={restaurent.image} alt="" width="50px" />
                    <h6>{restaurent.Name}</h6>
                </Box>
            </Box>
            <Box sx={{ height: "331px", mt: "20px", width: "80%", m: 4 }}>
                {cart.map((el, i) => {
                    return <Box sx={{ display: "flex", justifyContent: "space-evenly" }} key={i}>
                        <p>{el.type}</p>
                        <p>{el.name}</p>
                        <Box sx={{ border: 1, display: "flex", alignItems: "center", height: "25px" }}>
                            <Box sx={{ width: "25px", height: "25px", textAlign: "center" }}>-</Box>
                            <Box sx={{ width: "25px", height: "25px", textAlign: "center" }}>1</Box>
                            <Box sx={{ width: "25px", height: "25px", textAlign: "center" }}>+</Box>
                        </Box>
                        <p>₹{el.price}</p>
                    </Box>
                })}
                <Box sx={{ justifyContent: 'center', backgroundColor: '#f9f9f9', p: "10px 0px 10px 0px" }}>
                    <img src="https://img.icons8.com/ios-glyphs/14/chat.png" alt="" />
                    <InputBox type="text" placeholder="Any Suggestions?" />
                </Box>
                <Box sx={{ border: 1 }}>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox {...label} color="success" onChange={() => { setChk(!chk) }} />
                        <Typography>Opt in for No-contact Delivery</Typography>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                        {!chk ? <P>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</P> : <P>Our delivery partner will call to confirm. Please ensure that your address has all the required details.</P>}
                    </Box>
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Box>
    )
}