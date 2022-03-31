

function Confirmation() {
    
  
    return (
        <div>
            <div className='container' style={{margin: 'auto'}}>
                <div>
                    <img
                        src='https://trioangleblog.s3-us-west-2.amazonaws.com/trioangle/images/swiggy-banner.svg'
                        alt='swiggy'
                    />
                    <div>
                        <h2
                            className='text-success'
                            style={{
                                fontFamily: 'sans-serif',
                                fontSize: '50px',
                                margin: "auto",
                                justifyContent:'center'
                            }}
                        >
                            ORDER CONFIRMED
                        </h2>
                    </div>
                    <img
                        src='https://c8.alamy.com/comp/2ABNAN7/green-check-mark-icon-in-a-circle-tick-symbol-in-green-color-2ABNAN7.jpg'
                        alt='CheckMark'
                        style={{
                            width: '80px',
                            marginTop: '40px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
