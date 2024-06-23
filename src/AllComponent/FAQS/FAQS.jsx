import React, { useEffect } from 'react';
import "./FAQS.css"

import FAQ1 from '../../assets/WebsiteImage/FAQ01.png'
import FAQ2 from '../../assets/WebsiteImage/FAQ02.png'
import FAQ3 from '../../assets/WebsiteImage/FAQ03.png'
import FAQ4 from '../../assets/WebsiteImage/FAQ04.png'
import FAQ5 from '../../assets/WebsiteImage/FAQ05.png'
import FAQ6 from '../../assets/WebsiteImage/FAQ06.png'
import FAQ7 from '../../assets/WebsiteImage/FAQ07.png'
import FAQ8 from '../../assets/WebsiteImage/FAQ08.png'
import FAQ9 from '../../assets/WebsiteImage/FAQ09.png'
import FAQ10 from '../../assets/WebsiteImage/FAQ10.png'
import FAQ11 from '../../assets/WebsiteImage/FAQ11.png'
import FAQ12 from '../../assets/WebsiteImage/FAQ12.png'
import { useLocation, useNavigate } from 'react-router-dom';

const FAQS = () => {
    const navigate = useNavigate();

    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <div>

            <div className='bg-[#202F4E]'></div>
            <h2 className='aboutTitle'>Our Product</h2>
            <div className='FAQ px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto'>


                <div className="ExclusiveFAQ text-center">

                    <h2 className="text-center text-3xl font-bold">Our Exclusive Products Better</h2>

                    <div className="ExclusiveMainFAQ grid grid-cols-1 md:grid-cols-3 gap-5 py-10">

                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ1} alt="img" />
                                </div>
                                <h2 className="text-white">Client Resource Management 
                                ( CRM )</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ2} alt="img" />
                                </div>
                                <h2 className="text-white">Human Resource Management ( HRM)</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ3} alt="img" />
                                </div>
                                <h2 className="text-white">Production And Inventory Management Software</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ4} alt="img" />
                                </div>
                                <h2 className="text-white">Accounts Management</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ5} alt="img" />
                                </div>
                                <h2 className="text-white">Point Of Sale (POS)</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ6} alt="img" />
                                </div>
                                <h2 className="text-white">Shipping Management Software</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ7} alt="img" />
                                </div>
                                <h2 className="text-white">School Management System Software</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ8} alt="img" />
                                </div>
                                <h2 className="text-white">E-Commerce</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ9} alt="img" />
                                </div>
                                <h2 className="text-white">Mobile Shop Management</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ10} alt="img" />
                                </div>
                                <h2 className="text-white">Wholesale Shop Management</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ11} alt="img" />
                                </div>
                                <h2 className="text-white">Web Site Design and Development</h2>
                            </div>
                        </div>
                        <div className="FAQCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={FAQ12} alt="img" />
                                </div>
                                <h2 className="text-white">Pharmacy Management System</h2>
                            </div>
                        </div>

                    </div>

                    <div className="Question py-8">
                        <h2>Got A <span>Question?</span> Ask Away!</h2>
                        <button onClick={() =>{navigate("/Contact")}}>Contact Us</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FAQS;