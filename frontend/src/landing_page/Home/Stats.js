import React from 'react'
function Stats() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 '>
                    <div className='container my-5 px-5'>
                        <h1>Trust with confidence</h1>
                    </div>
                    <div className='container my-5 px-5'>
                        <h3>Customer-first always</h3>
                        <p className="my-2">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='container my-5 px-5'>
                        <h3>No spam or gimmicks</h3>
                        <p className="my-2">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='container my-5 px-5'>
                        <h3>The Zerodha universe</h3>
                        <p className="my-2">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='container my-5 px-5'>
                        <h3>Do better with money</h3>
                        <p className="my-2">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                </div>
                <div className='col-6 text-center mt-5'>
                    <img src='images\ecosystem.png' style={{ width: "95%" }} />
                    <div className='row mt-2'>
                        <div>
                            <a href='/' className='me-5' style={{ textDecoration: "none" }}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a href='/' style={{ textDecoration: "none" }}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;