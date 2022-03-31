import { Info, LogButton, LogButtona, Main, Main1, Pic, SignBttn, Span, Span1 } from "../../../Styles/cart"

export const Not_Logged = () => {
    return (
        <Main1>

            <Info>
                <h1><Span1><img src="https://img.icons8.com/small/344/ffffff/gender-neutral-user.png" alt="" width="25px" /></Span1>Account</h1>
                <p>To place your order now, log in to your existing account or sign up</p>
                <LogButtona>
                    <LogButton>
                        <p>Have an account?</p>
                        <p>LOG IN</p>
                    </LogButton>

                    <SignBttn>
                        <p>New to Swiggy?</p>
                        <p>SIGN UP</p>
                    </SignBttn>
                </LogButtona>
            </Info>
            
            <Pic>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" alt="" />
            </Pic>
        </Main1>
    )
}