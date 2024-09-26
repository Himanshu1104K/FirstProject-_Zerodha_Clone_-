import React from 'react'

function Education() {
    return (
        <div className='container p-5'>
            <div className='row px-4'>
                <div className='col'>
                    <img src='images\education.svg' />
                </div>
                <div className='col p-4'>
                    <h2 className='my-5'>Free and open market education</h2>
                    <p className='my-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' style={{ textDecoration: "none" }}  >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='my-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/' style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;