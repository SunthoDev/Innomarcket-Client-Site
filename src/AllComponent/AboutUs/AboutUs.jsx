import React, { useEffect } from 'react';
import "./AboutUs.css"
import aboutBanner from "../../assets/WebsiteImage/aboutBanner.png"
import missionImage from "../../assets/WebsiteImage/missionImage.png"
import { useLocation, useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const {pathname} = useLocation();
  useEffect(() =>{
      window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className=''>
      <div className='bg-[#202F4E] py-11'></div>
      <h2 className='aboutTitle'>About Us</h2>
      <div className='About px-2 py-16 md:px-0 pt-7 md:pt-20 w-[100%] lg:w-[1140px] mx-auto'>

        <div className="bannerAbout">
          <img className='w-[100%] h-[100%]' src={aboutBanner} alt="" />
        </div>

        {/* --------------------------------------------------------------------------- */}

        <div className="Excellent grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-12">
          <div className="left">
            <p>Software and Technology Company</p>
            <h2 className='mt-1'><span>IT Innovation</span>and excellent</h2>
            <h2>Customer services</h2>
          </div>
          <div className="right">
            <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment he for sympathize.</p>
          </div>
        </div>

        {/* --------------------------------------------------------------------------- */}

        <div className="History mt-12 px-[40px] md:px-[94px] py-[100px]">

          <h2>Our <span className='text-[#FA5D6F]'>History</span></h2>
          <p>Since its founding in Berlin, Germany, InnoMarkt Consultancy has established a remarkable presence in the software industry. With its inception in couple of years, the company swiftly gained acclaim for its groundbreaking solutions and exceptional consultancy services. InnoMarkt's exceptional team of skilled software engineers and consultants have consistently delivered cutting-edge software solutions to clients across a wide range of sectors. By leveraging the power of technology, InnoMarkt has enabled businesses to flourish in the ever-evolving digital era. Their unwavering dedication to excellence and their unwavering customer-centric approach have cemented InnoMarkt Consultancy as a trusted partner for organizations looking to harness technology for growth and success. Today, InnoMarkt remains at the forefront of the software industry, continuously driving innovation and transformation not only within Berlin but also in various regions beyond. With its deep expertise and forward-thinking strategies, InnoMarkt Consultancy continues to shape the future of software solutions and positively impact businesses worldwide.</p>

        </div>


        {/* --------------------------------------------------------------------------- */}

        <div className="Mission py-24">

          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">


            <div className="missionLeft order-2 md:order-1">

              <h2 className='mb-3'>Our <span>Mission</span></h2>
              <p>The mission of InnoMarkt Consultancy is to provide top-notch software and technology consultancy services, empowering businesses to leverage cutting-edge solutions. We aim to drive digital transformation, enhance operational efficiency, and deliver exceptional value to our clients in the ever-evolving technology landscape.</p>
              <h2 className='py-4'>Our <span>Mission</span></h2>
              <p>InnoMarkt Consultancy's aim is to be a global leader in software and technology consulting, driving innovation and determining the future of organizations throughout the world. We see a world in which enterprises effortlessly incorporate innovative technology to achieve their objectives and solve difficulties. We aspire to deliver revolutionary solutions that alter industries and open up new opportunities by cultivating a culture of innovation, cooperation, and constant learning. Our goal is to be known as the go-to consulting for companies looking for cutting-edge software solutions, strategic technological guidance, and unrivaled experience. We want to help organizations prosper in the digital era and leave a lasting impression on the global technological landscape.</p>

            </div>

            <div className="missionRight order-1 md:order-2">
              <div className="img">
                <img className='w-[100%] h-[100%]' src={missionImage} alt="" />
              </div>
            </div>
          </div>

        </div>


          {/* --------------------------------------------------------------------------- */}


          <div className="Question py-8">
            <h2>Got A <span>Question?</span> Ask Away!</h2>
            <button onClick={() =>{navigate("/Contact")}}>Contact Us</button>
          </div>




      </div>







    </div>
  );
};

export default AboutUs;