import { Link } from "react-router-dom"
import { NAVDIV, NavSec2 } from "../Styles/homestyles"

export const NavBar= ()=>{
    return(
        <NAVDIV>
            <div>
                <h2>location</h2>
            </div>
            <NavSec2>
                <h2>search</h2>
                <h2>Offers</h2>
                <h2>Help</h2>
                <h2>Sign in</h2>
                <Link to="/cart">
                    <h2>Cart</h2>
                </Link>
            </NavSec2>
        
        </NAVDIV>
    )
}