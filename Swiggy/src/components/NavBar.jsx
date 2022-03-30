import { Link } from "react-router-dom"

export const NavBar= ()=>{
    return(
        <div>
            <div>
                <h2>location</h2>
            </div>
            <div>
                <h2>search</h2>
                <h2>Offers</h2>
                <h2>Help</h2>
                <h2>Sign in</h2>
                <Link to="/cart">
                    <h2>Cart</h2>
                </Link>
            </div>
        
        </div>
    )
}