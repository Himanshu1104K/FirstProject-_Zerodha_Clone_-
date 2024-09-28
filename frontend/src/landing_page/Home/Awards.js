import React from 'react'

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='images\largestBroker.svg' />
                </div>
                <div className='col-6 mt-4 p-5'>
                    <h1 className='m-3'>Largest stock broker in India</h1>
                    <p className='m-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='m-3'>Futures and Options</li>
                                <li className='m-3'>Commodity derivatives</li>
                                <li className='m-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='m-3'>Stocks & IPOs</li>
                                <li className='m-3'>Direct mutual funds</li>
                                <li className='m-3'>Bonds and Govt. Security</li>
                            </ul>
                        </div>
                        <img src='images\pressLogos.png' style={{ width: "90%" }} className='m-3' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;