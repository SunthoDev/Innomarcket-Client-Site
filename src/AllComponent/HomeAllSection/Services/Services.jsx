import React from 'react';
import "./Services.css"
import graphic from "../../../assets/WebsiteImage/graphic-design 1.png"
import ui from "../../../assets/WebsiteImage/ui icon.png"
import web from "../../../assets/WebsiteImage/web icon.png"
import soft from "../../../assets/WebsiteImage/soft icon.png"
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='px-2 lg:px-0  Services pt-10 bg-[#F1F3F9]'>

            <div className="w-[100%] lg:w-[1140px] mx-auto">

                <div className="titles text-center md:text-left">
                    <h2 className=''>Services</h2>
                    <h3>We improved your business performance and </h3>
                    <h3>gain more Customer </h3>
                </div>

                <div className="maineItems grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="Item  text-center sm:text-left mt-10 md:mt-0">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={graphic} alt="" />
                        </div>
                        <h2>Graphic Design</h2>
                        <p className=''>Graphic involves creating compelling designs that captivate and engage audiences,</p>
                        <button><Link to="Services">Read More</Link></button>
                    </div>
                    <div className="Item  text-center sm:text-left mt-10 md:mt-0">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={ui} alt="" />
                        </div>
                        <h2>UI & UX DESIGN</h2>
                        <p className=''>Creating beautiful and user-friendly interfaces that delight and engage, resulting</p>
                        <button><Link to="ServicesTow">Read More</Link></button>
                    </div>
                    <div className="Item  text-center sm:text-left mt-10 md:mt-0">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={web} alt="" />
                        </div>
                        <h2>Web Development</h2>
                        <p className=''> We blend cutting-edge technology and innovative design to create dynamic </p>
                        <button><Link to="ServicesThree">Read More</Link></button>
                    </div>
                    <div className="Item  text-center sm:text-left mt-10 md:mt-0">
                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={soft} alt="" />
                        </div>
                        <h2>Software Development</h2>
                        <p className=''>Our ERP gets all your business data under one platform and integrates it. </p>
                        <br></br>
                        <button><Link to="ServicesOne">Read More</Link></button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Services;