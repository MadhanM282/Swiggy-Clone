import { LogsDiv, Span, Span1 } from "../../../Styles/cart"

export const Logged = ()=>{
    return (
        <LogsDiv>
            <h1><Span1> <img src="https://img.icons8.com/small/344/ffffff/gender-neutral-user.png" alt="" width="25px" /> </Span1> Logged in <Span><img src="https://img.icons8.com/color/344/approval--v1.png" alt="success" width="30px" /></Span></h1>
            <h2>{"Name"}|{"Number"}</h2>
        </LogsDiv>
    )
}