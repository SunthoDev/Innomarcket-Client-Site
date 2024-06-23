import React, { useEffect } from 'react';
import "./ServicesOne.css"
import ERPOne from "../../assets/WebsiteImage/Erp.png"
import ERPTow from "../../assets/WebsiteImage/Erp2.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';



const ServicesOne = () => {
    const navigate = useNavigate();

    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>

            <div className='bg-[#202F4E] py-11'></div>
            <h2 className='aboutTitle'>Services</h2>
            <div className='ERPAll px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>

                <div className="ErpTitle w-[100%] md:w-[50%] mx-auto text-center">
                    <h2>EnterPrice resourse planning</h2>
                    <h2>(ERP)</h2>
                    <p>Our ERP gets all your business data under one platform and integrates it. As a result you see what is happening in your entire organization in one interface and make more data driven decision.</p>
                </div>

                {/* ------------------------------------- */}


                <div className="ERPMaine grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-14">

                    <div className="ERPLeft order-2 md:order-1">

                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Account and Finance Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>HR and Payroll Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Procurement Module Summary</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Commercial Module Summary</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Store Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Production Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Sales Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Fixed Asset Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Data Admin Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>System Admin Module</p>
                        </div>

                    </div>

                    <div className="ERPRight order-1 md:order-2">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={ERPOne} alt="img" />
                        </div>
                    </div>

                </div>



                {/* ------------------------------------- */}

                <div className="ERPAccess grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-20">


                    <div className="ERPRLeft ">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={ERPTow} alt="img" />
                        </div>
                    </div>

                    <div className="ERPRight ">

                        <h2>ERP Accessibility</h2>

                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Browser Based Offline and Online System</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Online Transaction Processing System</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Electronic Document Flow System</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Real Time Data Processing</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Dash Board Reporting</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Vouchers and Documents Approval System</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Documents and Transactions Approval System</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Distributed but Central Transaction System</p>
                        </div>
                        {/* <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>Data Admin Module</p>
                        </div>
                        <div className="ERPInfo flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <p>System Admin Module</p>
                        </div> */}
                    </div>
                </div>

                {/* ------------------------------------- */}

                <div className="Question py-6 mt-14">
                    <h2>Got A <span>Question?</span> Ask Away!</h2>
                    <button onClick={() =>{navigate("/Contact")}}><Link to="Contact">Contact Us</Link></button>
                </div>

















            </div>
        </div >
    );
};

export default ServicesOne;