import React from 'react';

function Education(){
    
    return(
             <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 text-center  mt-5'>
                    <img src='Media/images/education.svg' style={{width:"75%"}}></img>
                </div>
                <div className='col-6 mt-5 p-3'>
                    <h2 className='mb-4 '>Free and open market education</h2>
                    <div className='p-2'>
                        <p className='mb-2 fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href="" className="" style={{textDecoration:"none"}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <p className='mt-4 fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="" style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
 
            </div>
        </div>
    );
}
export default Education;