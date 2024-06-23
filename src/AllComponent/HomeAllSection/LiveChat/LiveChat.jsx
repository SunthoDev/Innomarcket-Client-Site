import React from 'react';
import "./LiveChat.css"
import { Link, Navigate } from 'react-router-dom';
import chat from "../../../assets/WebsiteImage/chat.png"
import ExclusiveOne from '../../../assets/WebsiteImage/ExclusiveOne.png'
import ExclusiveTow from '../../../assets/WebsiteImage/ExclusiveTow.png'
import ExclusiveThree from '../../../assets/WebsiteImage/ExclusiveThree.png'

const LiveChat = () => {
    return (
        <div className='px-2 lg:px-0 Services pt-32 bg-[#F1F3F9]'>

            <div className="w-[100%] lg:w-[1140px] mx-auto">

                <div className="chatMain grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                    <div className="left mr-0 md:mr-[100px]  order-2 md:order-1 mt-4 md:mt-0">
                        <h2>B2B SERVICE</h2>
                        <h3>Live Chat</h3>
                        <p>A live chat service on a website revolutionizes customer engagement by providing real-time communication between businesses and their website visitors. With this invaluable tool, customers can instantly connect with support agents or sales representatives, resolving queries and receiving assistance without delay.</p>
                        <button><Link to="Products">How We Work</Link></button> 
                        
                    </div>

                    <div className="right order-1 md:order-2">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={chat} alt="img" />

                        </div>

                    </div>
                </div>



                {/* --------------------------------------------- */}


                <div className="div Exclusive text-center py-32">

                    <h2 className="text-center text-3xl font-bold">Our Exclusive Products <span className='text-[#FA5D6F]'>Better</span></h2>

                    <div className="ExclusiveMain grid grid-cols-1 md:grid-cols-3 gap-5 py-10">

                        <div className="ExCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={ExclusiveOne} alt="img" />
                                </div>
                                <h2 className="text-white">Client Resource Management ( CRM )</h2>
                            </div>
                        </div>
                        <div className="ExCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={ExclusiveTow} alt="img" />
                                </div>
                                <h2 className="text-white">Human Resource Management ( HRM)</h2>
                            </div>
                        </div>
                        <div className="ExCard relative">
                            <div className="nestate">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={ExclusiveThree} alt="img" />
                                </div>
                                <h2 className="text-white">Production And  Management Software</h2>
                            </div>
                        </div>

                    </div>

                    <button className='ExclusiveButton text-center'><Link to="Product">View All Products</Link></button>


                </div>


            </div>



        </div>
    );
};

export default LiveChat;