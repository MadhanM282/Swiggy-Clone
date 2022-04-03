import { Box, Button, Checkbox, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { InputBox, P } from "../../../Styles/cart"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
let Totl  = 0
export const ListData = () => {
    const [chk, setChk] = useState(false)
    const { cart } = useSelector((store) => store.cart)
    const data = useSelector((store)=>store.restaurant.restaurantData)
    useEffect(() => {
        Totl=0
    },[])
    return (
        <Box sx={{ justifyContent: 'center' }}>
            <Box sx={{ boxShadow: 3, mt: "0px" }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: "70%", pt: "10px", pb: "10px" }}>
                    <img src={data.img_url} alt="" width="50px" />
                    <h6>{data.name}</h6>
                </Box>
            </Box>
            <Box sx={{ height: "331px", mt: "20px", width: "80%", m: 4, overflowY: 'scroll'}}>
                {cart.map((el, i) => {
                    Totl+=el.price
                    return <Box sx={{ display: "flex", justifyContent: "space-between" }} key={i}>
                        <p>{el.name}</p>
                        <Box sx={{ border: 1, display: "flex", alignItems: "center", height: "25px",justifyContent: "center" }}>
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
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox {...label} color="success" onChange={() => { 
                            setChk(!chk);
                        Totl=0
                            }} />
                        <Typography>Opt in for No-contact Delivery</Typography>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                        {!chk ? <P>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</P> : <P>Our delivery partner will call to confirm. Please ensure that your address has all the required details.</P>}
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", p: 2, mt: 2, justifyContent: "space-evenly", border: "1px dashed" }}>
                    <img src="../../../Icons/discount.svg" width='25px' alt="" />
                    <Typography>Apply Coupon</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">Bill Details</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <P>Item Total </P>
                        <P>₹{Totl/2}</P>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <P>Delivery Fee</P>

                        <P>₹27</P>
                    </Box>
                    <hr />
                    <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: 2 }}>
                        <P>Taxes and Charges</P>
                        <P>₹34.45</P>
                    </Box>

                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", ml: 4, mr: 4, mt: 0, mb: 0 }}>

                <Typography>TO PAY</Typography>
                <Typography>₹{(Totl/2)+27+34.45}</Typography>
            </Box>
        </Box>
    )
}