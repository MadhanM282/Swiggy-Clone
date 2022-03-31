import { Emptydiv, Seerestaurantsnearyou } from "../../Styles/cart"

export const Empty = ()=>{
    return (
        <Emptydiv>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty" width="50%" />
            <h3>Your cart is empty</h3>
            <div>You can go to home page to view more restaurants</div>
            <Seerestaurantsnearyou>SEE RESTAURANTS NEAR YOU</Seerestaurantsnearyou>
        </Emptydiv>
    )
}