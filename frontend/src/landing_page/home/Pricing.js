import React from "react";

function Pricing(){
    return(
        <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-5">
                <h2 className="mb-3">Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>see pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-7">
                <div className="row">
                <div className="col text-center " style={{border:"2px solid black", borderRadius:"10px",marginLeft:"2px"}}>
                    <h1>₹0</h1>
                    <p>  Free account opening</p>
                </div>
                <div className="col text-center " style={{border:"2px solid black", borderRadius:"10px",marginLeft:"2px"}}>
                    <h1>₹0</h1>
                    <p> Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col text-center " style={{border:"2px solid black", borderRadius:"10px",marginLeft:"2px"}}>
                     <h1>₹20</h1>
                    <p>  Intraday and F&O</p>
                </div>
                </div>
            </div>
            </div>
        </div>

    );
}
export default Pricing;