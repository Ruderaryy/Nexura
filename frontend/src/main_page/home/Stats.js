import React from 'react';

function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className="fs-2 mb-5">Trade with Assurance</h1>
                    <h2 className="fs-4">Customer-Centric Approach</h2>
                    <p className="text-muted">That’s why over 2 million clients rely on Nexura for managing investments worth ₹4 lakh crores, ensuring a seamless and reliable trading experience.</p>

                    <h2 className="fs-4">No Distractions or Fluff</h2>
                    <p className="text-muted">Experience a platform free from distractions, gimmicks, and constant notifications. Enjoy high-quality, intuitive apps designed for your convenience and preferences.</p>

                    <h2 className="fs-4">The Nexura Ecosystem</h2>
                    <p className="text-muted">Nexura is more than just a trading app. It’s an extensive ecosystem, with investments in over 35 fintech ventures, providing you with personalized services to meet your financial goals.</p>

                    <h2 className="fs-4">Empower Your Financial Journey</h2>
                    <p className="text-muted">Through innovative tools like Insight and TradeAssist, Nexura doesn’t just process trades; we empower you to make smarter, more informed financial decisions.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Nexura <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;