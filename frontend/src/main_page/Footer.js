import React from 'react';

function Footer() {
    return (  
        <footer style={{backgroundColor: "rgb(250, 250, 250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width: "50%"}} />
                    <p>&copy; 2010 - 2024, Not Nexura Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='' style={{textDecoration:"none"}}>About</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Product</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Pricing</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Referral Programme</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Careers</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Nexura.tech</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Press & media</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Nexura cares</a>
                    <br />
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='' style={{textDecoration:"none"}}>Contact</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Support portal</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>N-Connect blog</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>List of charges</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Downloads and resources</a>
                    <br />
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href='' style={{textDecoration:"none"}}>Open an account</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>Fund transfer</a>
                    <br />
                    <a href='' style={{textDecoration:"none"}}>60 day challenge</a>
                    <br />
                </div>
            </div>
            <div className='mt-5 text-small text-muted'>
                <p>Nexura Trading Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000042019 CDSL: Depository services through Nexura Securities Pvt. Ltd. – SEBI  Registration no.: IN-DP-200-2020 Commodity Trading through Nexura Commodities Pvt. Ltd. MCX: 56078 – SEBI Registration no.: INZ000049032 Registered  Address: Nexura Trading Ltd., #101/102, 5th Cross, Zenith Colony, Opp. Global School, J.P Nagar 6th Phase, Bengaluru - 560078, Karnataka, India. For     any complaints related to securities broking, please write to complaints@nexura.com, and for DP-related issues, please contact dp@nexura.com. Please    ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>

                <p>Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details for filing complaints on SCORES include Name, PAN,    Address, Mobile Number, and E-mail ID. Benefits include Effective Communication and Speedy redressal of grievances.</p>

                <p>Investments in the securities market are subject to market risks; please read all related documents carefully before investing.</p>

                <p>"Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information about your     transactions directly from the Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise     when dealing in securities markets – once KYC is completed through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo     the same process again with another intermediary." Dear Investor, when subscribing to an IPO, there is no need to issue a cheque. Please write your     bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. If there is no allotment, the funds  will remain in your bank account. As a business, we do not provide stock tips and have not authorized anyone to trade on behalf of others. If you    encounter anyone claiming to be part of Nexura and offering such services, please create a ticket here.</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;