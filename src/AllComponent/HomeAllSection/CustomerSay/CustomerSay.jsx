import React from 'react';
import "./CustomerSay.css"
import customer from "../../../assets/WebsiteImage/Customer.png"
import icon1 from "../../../assets/WebsiteImage/codeations.png"
import Shipon from "../../../assets/WebsiteImage/Shipon.jpg"

const CustomerSay = () => {
    return (
        <div className='px-2 py-32 md:px-0 Services  bg-[#F1F3F9]'>

            <div className="w-[100%] lg:w-[1140px] mx-auto">

                <div className="title">
                    <h2>TESTIMONIALS</h2>
                    <h3>What our customer says</h3>
                </div>

                <div className="CustomerParent grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="img px-0 md:px-[48px]">
                        <img className='w-[100%] h-[100%]' src={customer} alt="" />
                    </div>

                    <div className="customerInfo px-0 md:px-[48px]">
                        <img src={icon1} alt="" />
                        <p>Currently, Ford sells six sedans and coupes in North America with  hits multiple segments from the compact Fiest to the mid-size Focus, C-Max and Fusion to the full-size Taurus. The Mustang stands alone as the lone coupe.</p>
                        <div className="user">
                            <div className="img">
                                <img src={Shipon} alt="" />
                            </div>
                            <div className="names">
                                <h4>Emily Jørgensen</h4>
                                <h5>Author at Panoply Store</h5>
                            </div>
                        </div>

                        <i class="fa fa-angle-left mr-3" aria-hidden="true"></i>
                        <i class="fa fa-angle-right " aria-hidden="true"></i>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default CustomerSay;