import React, { useEffect } from 'react';
import "./Services.css"

import Illustrator from '../../assets/Rectangle 2108.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Services = () => {

    const navigate = useNavigate();
    
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>
            <div className='bg-[#202F4E] py-11'></div>
            <h2 className='aboutTitle'>Services</h2>
            <div className='servicesParent About px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>

                <div className="Graphic grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="GraphicLeft order-2 md:order-1">
                        <h2>About our Graphic</h2>
                        <h2>Design services</h2>
                        <p>Graphic involves creating compelling designs that captivate and engage audiences, shaping the visual identity of brands, products, and services. Graphic designers bring concepts to life with their creativity and expertise.</p>

                        <div className="BrandingRight grid grid-cols-2 gap-5 px-16 mt-4">

                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Branding</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Logo Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Social Media Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Print Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Package Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>T-Shirt Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Illustration Design</h3>
                            </div>

                        </div>

                    </div>

                    <div className="GraphicRight order-1 md:order-2">
                        <div className="img">
                            <img className="w-[100%] h-[100%]" src={Illustrator} alt="" />
                        </div>
                    </div>

                </div>


                {/* --------------------------- */}

                <div className="Approach mt-16 mb-4">

                    <h2 className='ServiceTitle'>Our Approach</h2>


                    <div className="AproMain">

                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Requirements and understanding</h2>
                            <p>Firstly, it begins with gathering client requirements and understanding the project objectives. This includes identifying the target audience, desired tone, and key messages to be conveyed.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Research</h2>
                            <p>Next, extensive research is conducted to gain insights into the industry, competitors, and current design trends. This helps in developing a design strategy that stands out and aligns with the client's goals</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Ideation</h2>
                            <p>The ideation phase follows, where concepts and visual directions are explored. Sketching and brainstorming sessions are conducted to generate a range of ideas. Once the concept is selected, the design is refined, and the actual creation begins.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Design</h2>
                            <p>In the design phase, graphic designers utilize various tools to create the visual elements such as typography, color schemes, and imagery. Iterative design cycles and feedback from the client help in refining and finalizing the design.
                            Once the design is approved, it is prepared for production. This involves converting the design into appropriate file formats for different mediums such as print or digital.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Final Result</h2>
                            <p>Lastly, the final design is delivered to the client, ready for implementation. It is essential to maintain effective communication and collaboration throughout the process to ensure client satisfaction and successful execution of the design.</p>

                        </div>

                    </div>

                </div>

                {/* --------------------------- */}


                <div className="Question py-8">
                    <h2>Got A <span>Question?</span> Ask Away!</h2>
                    <button onClick={() =>{navigate("/Contact")}}><Link to="Contact">Contact Us</Link></button>
                </div>











            </div>

        </div>
    );
};

export default Services;