import React, { useEffect } from 'react';
import "./Servicesthree.css"
import Illustrator from '../../assets/WebsiteImage/servicesThree.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ServicesThree = () => {

    const navigate = useNavigate();

    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])


    return (
        <div>
        <div className='bg-[#202F4E] py-11'></div>
        <h2 className='aboutTitle'>Services</h2>
        <div className='servicesThree About px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>

            <div className="Graphic grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="GraphicLeft order-2 md:order-1">
                    <h2>About our web</h2>
                    <h2>services</h2>
                    <p> We blend cutting-edge technology and innovative design to create dynamic and user-friendly websites that drive results for your business. Trust us to bring your online vision to life with our comprehensive web solutions.</p>

                    <div className="BrandingRight grid grid-cols-2 gap-5 px-16 mt-4">

                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>Static Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>Static Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WordPress Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WordPress Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WordPress Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WordPress Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WordPress Website</h3>
                        </div>
                        <div className="serv flex items-center">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <h3>WIX</h3>
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
                        <p>The research and strategy process of web design and development involves several key steps to ensure a successful outcome. Firstly, it begins with understanding the client's goals, target audience, and specific requirements. This includes conducting thorough market research and competitor analysis to identify trends and opportunities.</p>

                    </div>
                    <div className="AproCard">
                        <h2 className='w-[100%] md:w-[31%]'>Wireframing & Mockup</h2>
                        <p>A strategic plan is formulated, outlining the website's structure, features, and user experience. This includes creating user personas and developing a wireframe or prototype to visualize the layout and functionality.
                        Once the strategy is in place, the design phase begins. This involves creating a visually appealing and cohesive interface that aligns with the client's branding and engages the target audience. Iterative design and feedback loops help refine the design before proceeding to the development phase.</p>

                    </div>
                    <div className="AproCard">
                        <h2 className='w-[100%] md:w-[31%]'>Design & Development</h2>
                        <p>During development, the website is built using appropriate coding languages and frameworks. This includes implementing responsive design for optimal performance across different devices and browsers. Quality assurance testing is performed to ensure functionality, usability, and compatibility.</p>

                    </div>
                    <div className="AproCard">
                        <h2 className='w-[100%] md:w-[31%]'>Final Result</h2>
                        <p>Lastly, the website is launched and monitored for performance and user behavior. Data analytics tools are used to gather insights and make data-driven decisions for ongoing optimization and improvements.</p>

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

export default ServicesThree;