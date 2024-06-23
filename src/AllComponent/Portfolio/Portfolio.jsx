import React, { useEffect } from 'react';
import "./Portfolio.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import 'react-tabs/style/react-tabs.css';
import project01 from '../../assets/Portfolio/project01.png'
import projectOne from '../../assets/Portfolio/img1.png'
import projectFour from '../../assets/Portfolio/img4.png'
import project02 from '../../assets/Portfolio/project02.png'
import project03 from '../../assets/Portfolio/project03.png'
import ResentProject from '../../assets/Portfolio/project04.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>
            <div className='bg-[#202F4E] py-11'></div>

            <div className='px-2 py-20 md:px-0 w-[100%] lg:w-[1140px] mx-auto PortFolio pt-10 text-center'>
                <div className="titleRecent">
                    <h2>Portfolio</h2>
                    <h3>Resent Complete Projects</h3>
                </div>

                <Tabs className='ParentTabs py-8'>
                    <TabList className='tabHead'>
                        <Tab>All</Tab>
                        <Tab>Ui & UX/Design</Tab>
                        <Tab>Web Development</Tab>
                        <Tab>Software Development</Tab>
                        <Tab>Graphic Design</Tab>
                    </TabList>

                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

                            <div className="card">

                                <div className="img">

                                <img src={projectOne} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Name</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Website Design</h3>
                                <h2> Protect Name</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project03} alt="" />
                                </div>
                                <h3>Software Development</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project03} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project01} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">


                            <div className="card">

                                <div className="img">
                                    <img onClick={() =>{navigate("/uiux")}} src={projectOne} alt="" />

                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">




                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project03} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">




                            <div className="card">

                                <div className="img">
                                    <img src={project01} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project02} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project03} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={project01} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="MainCard grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>
                            <div className="card">

                                <div className="img">
                                    <img src={ResentProject} alt="" />
                                </div>
                                <h3>Ui/Ux Design</h3>
                                <h2> Protect Cyber Security</h2>

                            </div>

                        </div>

                    </TabPanel>

                </Tabs>

                {/* ---------------------------------- */}

                <div className="Question py-8">
                    <h2>Got A <span>Question?</span> Ask Away!</h2>
                    <button onClick={() =>{navigate("/Contact")}}>Contact Us</button>
                </div>





            </div>

        </div>
    );
};

export default Portfolio;