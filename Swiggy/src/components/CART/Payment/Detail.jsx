import { Box, Button, TextField } from "@mui/material"
import { Log, P, PaymentImg, Span1 } from "../../../Styles/cart"
import { alpha, styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey',
        },
    },
});
export const Pay = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ bgcolor: "white", ml: "100px" }}>

            <Box sx={{ ml: "20px", mt: "20px", p: 4 }} color="grey">
                <h1> <Span1><img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/ffffff/external-payment-money-kmg-design-detailed-outline-kmg-design-5.png" alt="" width="25px" /></Span1>Choose payment method</h1>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Box sx={{ width: "30%", bgcolor: "#edf1f7" }}>
                    <Box sx={[{ m: 2, mr: 0, p: 2 }, () => ({ '&:hover': { bgcolor: "#ffffff" } })]}>
                        <h3>
                            Credit/Debit
                        </h3>
                    </Box>
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Box>
                        <p>Add New Card</p>
                        <p>We Accept<PaymentImg>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Visa_lztyeu" alt="" height="25px" />
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Mastercard_wqoea2" alt="" height="25px" />
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/RuPayColoured_oyd73s_soebkd" alt="" height="25px" />
                        </PaymentImg> </p>
                    </Box>
                    <Box>
                        <Box>
                            <CssTextField sx={{ width: "90%", m: 1 }} label="Card Number" id="custom-css-outlined-input" />
                        </Box>
                        <Box sx={{ display: "flex", m: 1 }}>
                            <CssTextField sx={{ width: "60%" }} label="Valid through(MM/YY)" id="custom-css-outlined-input" />
                            <CssTextField sx={{ width: "30%",ml:2 }} label="CVV" id="custom-css-outlined-input" />
                        </Box>
                        <Box>
                            <CssTextField sx={{ width: "90%", m: 1 }} label="Name on Card" id="custom-css-outlined-input" />
                        </Box>
                    </Box>
                    <Button onClick={()=>{navigate("/success")}} sx={[{bgcolor:"#60b246",p:2,color:"white",width:"90%",m:1},()=>({"&:hover":{bgcolor:"#60b246"}})]}>Pay{}</Button>
                    <P>Card details will be saved securely, based of the industry standard</P>
                </Box>

            </Box>
        </Box>
    )
}