import React, { useEffect } from 'react';
import "./Prodects.css"
import SystemMeet from "../../assets/WebsiteImage/SystemMeet.png"
import detailsMeeting from "../../assets/WebsiteImage/detailsMeeting.jpg"
import ExpandingText from "../../assets/WebsiteImage/ExpandingText.png"
import { useLocation } from 'react-router-dom';

const Products = () => {

    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div className="ProductBannerMain">

            <div className="bg-[#202F4E]  py-20">

                <div className="ProductBanner px-2 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-14">

                    <div className="ProductBannerCard grid grid-cols-1 md:grid-cols-2 gap-5 text-white items-center">

                        <div className="ProductBannerLeft order-2 md:order-1 text-center md:text-left mt-8 md:mt-0">
                            <h2 className='text-center md:text-left'>With Live Chat</h2>
                            <h2 className='text-center md:text-left'>System</h2>
                            <p className='text-center md:text-left'>Ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim? Maiores iusto pariatur odit expedita nihil rerum, modi exercitationem eos amet.</p>
                            <button>Get Started </button>

                        </div>

                        <div className="ProductBannerRight order-1 md:order-2">
                            <div className="img">
                                <img className='w-[95%] h-[95%]' src={SystemMeet} alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* -------------------------------- */}

            <div className="py-20">

                <div className="ProductDetailMain px-2 md:px-0 w-[100%] lg:w-[1140px] mx-auto">

                    <div className="DetailMain grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div className="DEtailsLeft">

                            <div className="img">
                                <img className='w-[100%] h-[100%]' src={detailsMeeting} alt="" />
                            </div>


                        </div>


                        <div className="DEtailsRight text-black">
                            <p>Live chat offers a convenient and efficient channel for users to seek information, make inquiries, or voice concerns while browsing a website. It enhances customer satisfaction by offering immediate responses and personalized interactions. The chat service also allows agents to handle multiple conversations simultaneously, increasing efficiency and reducing customer wait times.</p>
                            <p className='py-6'>Furthermore, live chat enables businesses to gather valuable customer data, such as demographics and browsing patterns, facilitating targeted marketing and improved customer service. It serves as a valuable source of feedback, helping companies identify pain points, optimize user experience, and make informed business decisions.</p>
                            <p>In today's fast-paced digital landscape, integrating a live chat service on a website is a game-changer, enhancing customer support, boosting sales, and fostering stronger connections with website visitors.</p>
                        </div>




                    </div>



                    {/* -------------------------------- */}

                    <div className="StartedStape">

                        <div className="StapeTitle mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 text-black items-center">
                            <div className="StapeTitleLeft text-center md:text-left">
                                <h3>HOW IT WORKS</h3>
                                <h2 className='productTitle'>Get Started With</h2>
                                <h2 className='productTitle'>3 Easy Steps</h2>
                            </div>
                            <div className="StapeTitleRight text-center md:text-left">
                                <p>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, </p>
                            </div>
                        </div>

                        <div className="StartedStapeMain grid grid-cols-1 md:grid-cols-3 gap-10 pt-16">

                            <div className="StartedStapeCard mt-4 md:mt-0">
                                <h1>01</h1>
                                <h2>Easy to Customize</h2>
                                <p>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. </p>
                            </div>
                            <div className="StartedStapeCard">
                                <h1>02</h1>
                                <h2>Easy to Develop</h2>
                                <p>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. </p>
                            </div>
                            <div className="StartedStapeCard">
                                <h1>03</h1>
                                <h2>Easy to Design</h2>
                                <p>SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens from each category, SeaWire Web deserves to be your partner in working on projects. </p>
                            </div>






                            <div className="StartedStapeCard"></div>
                            <div className="StartedStapeCard"></div>


                        </div>
                    </div>

                    {/* -------------------------------- */}

                    <div className="Expanding pt-16">

                        <div className="ExpandingMain grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

                            <div className="ExpandingItemLeft order-2 md:order-1">
                                <h2>Expanding rom a single App to multi-</h2>
                                <h2>Channel Support: Enhancing Customer</h2>
                                <h2>Reach and Engagement</h2>
                                <button>Download Now</button>
                            </div>

                            <div className="ExpandingItemRight order-1 md:order-2">
                                <div className="img">
                                    <img className='w-[100%] h-[100%]' src={ExpandingText} alt="" />
                                </div>
                            </div>


                        </div>



                    </div>


                    {/* -------------------------------- */}

                    <div className="SimplePlan pt-16 pb-4">

                        <div className="SimplePlanTitle w-[100%] md:w-[50%] mx-auto text-black text-center">
                            <h1>Simple Plans for everyone</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore iste maiores voluptates delectus iusto accusamus quas ex, </h2>
                        </div>


                        <div className="SimplePlanMain grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

                            <div className="SimplePlanCard">
                                <h3>Begineer</h3>
                                <h1>$45</h1>

                                <div className="icons flex items-center mt-3">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>3 Landing  page Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>20 Illustrator Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>30 Icon Asset</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>20 Photo Asset</p>
                                </div>
                                <button>Order Now</button>
                            
                            </div>
                            <div className="SimplePlanCard">
                                <h3>Begineer</h3>
                                <h1>$65</h1>

                                <div className="icons flex items-center mt-3">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>6 Landing  page Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>28 Illustrator Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>35 Icon Asset</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>30 Photo Asset</p>
                                </div>

                                <button>Order Now</button>
                            
                            </div>
                            <div className="SimplePlanCard">
                                <h3>Begineer</h3>
                                <h1>$99</h1>

                                <div className="icons flex items-center mt-3">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>15 Landing  page Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>35 Illustrator Accesss</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>Unlimited Icon Asset</p>
                                </div>
                                <div className="icons flex items-center">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <p>Unlimited Photo Asset</p>
                                </div>

                                <button>Order Now</button>
                            
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default Products;