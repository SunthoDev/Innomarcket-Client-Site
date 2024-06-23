import React, { useEffect } from 'react';
import "./ServicesTow.css"
import Illustrator from '../../assets/WebsiteImage/servicesTow.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ServicesTow = () => {
    const navigate = useNavigate();

    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])


    return (
        <div>
            <div className='bg-[#202F4E] py-11'></div>
            <h2 className='aboutTitle'>Services</h2>
            <div className='servicesTow About px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>

                <div className="Graphic grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div className="GraphicLeft order-2 md:order-1">
                        <h2>About our UI UX</h2>
                        <h2>services</h2>
                        <p>Creating beautiful and user-friendly interfaces that delight and engage, resulting in an intuitive and enjoyable user experience.</p>

                        <div className="BrandingRight grid grid-cols-2 gap-5 px-16 mt-4">

                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Website template</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Website mockup</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Android App design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>IOS App Design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Dashboard design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>Web App design</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>User Interface</h3>
                            </div>
                            <div className="serv flex items-center">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <h3>User experience</h3>
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

                    <h2>Our Approach</h2>


                    <div className="AproMain">

                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Research and Strategy</h2>
                            <p>The UI/UX design process for website and app mockups involves a series of steps to create visually appealing and user-friendly interfaces. Firstly, it starts with understanding the target audience and their needs through research and user personas.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Wireframing</h2>
                            <p>wireframes are created to establish the layout and structure of the interface, focusing on information architecture and user flow. This helps define the overall user experience and functionality.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Mockup & Prototype</h2>
                            <p>Once the wireframes are approved, the visual design phase begins. This includes selecting color schemes, typography, and graphical elements that align with the brand identity and enhance the user interface. Iterative design cycles and feedback loops refine the visual design until it meets the desired aesthetics.
                            After the visual design is finalized, interactive prototypes are developed to simulate user interactions and test the usability of the interface. This stage helps identify any usability issues and fine-tune the user experience.</p>

                        </div>
                        <div className="AproCard">
                            <h2 className='w-[100%] md:w-[31%]'>Final Result</h2>
                            <p>Lastly, the final mockups are delivered, including high-fidelity designs that showcase the complete visual representation of the website or app. These mockups serve as a blueprint for the development team to implement the design accurately.</p>

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

export default ServicesTow;