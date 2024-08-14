import React from 'react';

function Pricing() {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className="mb-3 fs-2">Exceptional Value</h1>
                    <p>Nexura leads the way with transparent pricing and unbeatable value. Enjoy straightforward fees with no hidden costs, setting new standards in cost efficiency.</p>
                    <a href="" style={{ textDecoration: "none" }}>Explore Our Pricing{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'>
                    
                </div>
                <div className='col-6 mb-5'>
                    <div className='row'>
                        <div className='col-6 text-center border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free Equity delivery and 
                               <br/>
                               direct mutual funds
                            </p>
                        </div>
                        <div className='col-6 text-center border p-3'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;