import React from 'react'
function Pricing() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-4'>Unbeatable Pricing</h1>
                    <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' className='me-5' style={{ textDecoration: "none" }}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-4'>
                    <div className='row text-center'>
                        <div className='col p-4 border'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;