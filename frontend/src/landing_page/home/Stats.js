import React from "react";

function Stats(){
    return(
             <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='mb-5 '>Trust with confidence</h2>
                    <div className='p-2'>
                        <h3 className="mb-2">Customer-first always</h3>
                        <p >That's why 1.6+ crore customers trust ViTrade with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        <h3 className="mb-2">No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        <h3 className="mb-2">The ViTrade universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h3 className="mb-2">Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-7 text-center '>
                    <img src='media/images/ecosystem.png' style={{width:"95%"}}></img>
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try kite demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
                    <img src='Media/images/pressLogos.png' alt="Press connections" className='p-2 mt-5 text-center mx-auto d-block'></img>
        </div>
    );
}
export default Stats;