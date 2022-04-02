import { Box } from "@mui/material"
import { useSelector } from "react-redux"

export const ListData = ()=>{
    const { cart, login, address, payment } = useSelector((store) => store.cart)
    return (
        <Box>
            
        </Box>
    )
}