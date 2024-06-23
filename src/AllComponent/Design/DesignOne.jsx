import React, { useEffect } from 'react';
import "./Design.css"



import TemplateOne from "../../assets/Portfolio/img3.png"
import ClientSatisfaction1 from "../../assets/Portfolio/img3.png"
import Presentation from "../../assets/Portfolio/img4.png"
import ClientSatisfaction2 from "../../assets/ClientSatisfide2.jpg"
import { useLocation } from 'react-router-dom';

const UIUX = () => {
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>

            <div className='bg-[#202F4E] py-11'></div>

            <div className='UIUX px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto'>

                <div className="TemplateOne">
                    <div className="img">
                        <img className='w-[100%] h-[100%]' src={TemplateOne} alt="" />
                    </div>
                </div>

                {/* ------------------------ */}

                <div className="ProjectDetail grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="ProjectDEtailsOne">
                        <h2>Project Namne: </h2>
                        <h3>Project Agency: </h3>
                    </div>
                    <div className="ProjectDEtailsOne">
                        <h2>Client From :  </h2>
                        <h3>United State </h3>
                    </div>
                    <div className="ProjectDEtailsOne">
                        <h2>Project Timeline : </h2>
                        <h3>1 month</h3>
                    </div>
                </div>

                {/* ------------------------ */}

                <div className="Presentation">
                    <h2>Presentation</h2>

                    <div className="img">
                        <img className='w-[100%] h-[100%]' src={Presentation} alt="img" />
                    </div>

                </div>

                {/* ------------------------ */}


                <div className="ClientSatisfaction">
                    <h2>Client Satisfaction</h2>

                    <div className="ClientSatisfactionMain grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={ClientSatisfaction1} alt="img" />
                        </div>

                        <div className="img">
                            <img className='w-[100%] h-[100%]' src={ClientSatisfaction2} alt="img" />
                        </div>

                    </div>

                </div>

                {/* ------------------------ */}

                <div className="Question py-12 mt-6">
                    <h2>Got A <span>Question?</span> Ask Away!</h2>
                    <button>Contact Us</button>
                </div>

            </div >
        </div>
    );
};

export default UIUX;