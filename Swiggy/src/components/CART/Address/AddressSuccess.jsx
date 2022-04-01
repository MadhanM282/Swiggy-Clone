
import { Box } from "@mui/material"
import { useSelector,useDispatch } from "react-redux"
import { Span, Span1 } from "../../../Styles/cart"

export const SuccessAddress = () => {
    const { cart, login, address, payment } = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    return (

        <Box sx={{ml:"100px",mt:"20px",p:"30px 50px",bgcolor:"white" }}>
            <h1 > <Span1><img src="https://img.icons8.com/ios/344/ffffff/place-marker--v1.png" alt="" width="25px" /></Span1>Delivery address<Span><img src="https://img.icons8.com/color/344/approval--v1.png" alt="success" width="30px" /></Span> </h1>
            <Box sx={[{ typography: 'body2' }]}>
                <p>
                    19-27-4/3 Lig-245, Vuda Phase-2, Gandhi Nagar, Ramachandra Nagar, <br /> Pedagantyada, Visakhapatnam, Andhra Pradesh 53...
                </p>
                <h5>30 MINS</h5>
            </Box>
        </Box>
    )       
}

{/* <Span><img src="https://img.icons8.com/color/344/approval--v1.png" alt="success" width="30px" /></Span> */}