import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>With over 2 million clients, Nexura is at the forefront of India’s trading landscape, contributing more than 15% of the daily retail order volumes. Our clients are actively engaged in trading and investing across a diverse range of asset classes, including:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency and Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src='media\images\pressLogos.png' style={{width:"90%"}} className='mt-4' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;