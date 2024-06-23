import React from 'react';
import "./Banner.css"
import bannerImage from "../../../assets/WebsiteImage/banner.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[#202F4E] banner">

            <div className="px-2 lg:px-0  w-[100%] lg:w-[1140px] mx-auto relative pt-48 md:pt-36">

                <div className=" bannerText ">
                    <p>EMPOWER YOUR BUSINESS</p>
                    <h2>Unlocking <span className='text-[#FA5D6F]'>Success</span> through</h2>
                    <h3>Excellent Services</h3>
                    <button className='MeetWithUs'><Link to="Contact">Meet With Us</Link></button>
                </div>

                <div className="img">
                    <img className='w-[100%] h-[100%]' src={bannerImage} alt="img" />
                </div>


            </div>

        </div>
    );
};

export default Banner;