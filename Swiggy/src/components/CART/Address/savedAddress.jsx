import { Box } from "@mui/material"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { AddressStat } from "../../../ReduxFiles/cart/cartAction"
import { SignBttn, Span, Span1 } from "../../../Styles/cart"

export const SavedAddress = () => {
    const {login, address, payment } = useSelector((store) => store.Stat)
    
    
    const dispatch = useDispatch()
    return (

        <Box>
            <h1> <Span1><img src="https://img.icons8.com/ios/344/ffffff/place-marker--v1.png" alt="" width="25px" /></Span1>Select delivery address </h1>
            <p>You have a saved address in this location</p>
            <Box sx={[{ p: 2, borderRadius: 1, width: "50%", typography: 'body2' }, () => ({ '&:hover': { boxShadow: 3 } })]}>
                <p>
                    19-27-4/3 Lig-245, Vuda Phase-2, <br /> Gandhi Nagar, Ramachandra Nagar, <br /> Pedagantyada, Visakhapatnam,<br /> Andhra Pradesh 53...
                </p>
                <h5>30 MINS</h5>
                <SignBttn sx={{ml:0}} onClick={()=>dispatch(AddressStat())}>
                    <p>DELIVER HEAR</p>
                </SignBttn>
            </Box>
        </Box>
    )       
}

{/* <Span><img src="https://img.icons8.com/color/344/approval--v1.png" alt="success" width="30px" /></Span> */}