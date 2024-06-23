import React, { useContext, useEffect, useState } from 'react';
import "./SecondOrder.css"
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';



const SecondOrder = () => {

    
    let { setProjectType,
        setAbout,
        setQuestionOne,
        setQuestionTwo,
        setQuestionThree,
        setQuestionFour,
        setDriveLink } = useContext(AuthContext)
  
    let handleProjectType = (e) =>{
        setProjectType(e.target.value);
    }
    let handleAbout = (e) =>{
        setAbout(e.target.value);
    }
    let handleQuestionOne = (e) =>{
        setQuestionOne(e.target.value);
    }
    let handleQuestionTwo = (e) =>{
        setQuestionTwo(e.target.value);
    }
    let handleQuestionThree = (e) =>{
        setQuestionThree(e.target.value);
    }
    let handleQuestionFour = (e) =>{
        setQuestionFour(e.target.value);
    }
    let handleDriveLink = (e) =>{
        setDriveLink(e.target.value);
    }
  
    
    return (
        <div className='SecondInformation'>

            <form>

                <div className="ProjectType">

                    <h2>Project Type</h2>

                    <div className="ProjectOne grid grid-cols-2 md:grid-cols-3 ">
                        <div class="flex">
                            <input onBlur={handleProjectType} type="radio" name="projectType" class="mr-2 radio border border-[#FA5D6F] " value="Graphic Design" />
                            <h3 class="text-black font-semibold">Graphic Design</h3>
                        </div>
                        <div class="flex">
                            <input  onBlur={handleProjectType} type="radio" name="projectType" class="mr-2 radio border border-[#FA5D6F]" value="UI & UX Design" />
                            <h3 class="text-black font-semibold">UI & UX Design</h3>
                        </div>
                        <div class="flex mt-[12px] md:mt-0">
                            <input  onBlur={handleProjectType} type="radio" name="projectType" class="mr-2 radio border border-[#FA5D6F] " value="Software Development"/>
                            <h3 class="text-black font-semibold">Software Development</h3>
                        </div>
                    </div>

                    <div className="ProjectTow grid grid-cols-2 md:grid-cols-3 ">
                        <div class="flex">
                            <input  onBlur={handleProjectType} type="radio" name="projectType" class="mr-2 radio border border-[#FA5D6F] " value="Website Development" />
                            <h3 class="text-black font-semibold">Website Development</h3>
                        </div>
                        <div class="flex">
                            <input  onBlur={handleProjectType} type="radio" name="projectType" class="mr-2 radio border border-[#FA5D6F] "  value="Others"/>
                            <h3 class="text-black font-semibold">Others</h3>
                        </div>
                    </div>


                </div>

                <div className="ProjectAbout">
                    <h2>Breif about your project</h2>

                    <textarea onBlur={handleAbout}  placeholder='Write heare' name="about" id="" cols="30" rows="10"></textarea>

                </div>


                <div className="AttachFile">
                    <h2>Attach File</h2>
                    <input type="file" name="" id="" />
                </div>

                <div className="ProjectQuestion">
                    <h2>Question 1</h2>
                    <input required onBlur={handleQuestionOne} type="text"  name='questionOne' placeholder='Write here' />
                </div>
                <div className="ProjectQuestion">
                    <h2>Question 2</h2>
                    <input onBlur={handleQuestionTwo} type="text"  name='questionTwo' placeholder='Write here' />
                </div>
                <div className="ProjectQuestion">
                    <h2>Question 3</h2>
                    <input onBlur={handleQuestionThree} type="text"  name='questionThree' placeholder='Write here' />
                </div>
                <div className="ProjectQuestion">
                    <h2>Question 4</h2>
                    <input onBlur={handleQuestionFour} type="text"  name='questionFour' placeholder='Write here' />
                </div>
                <div className="ProjectQuestion">
                    <h2>Paste drive link here (Optional)</h2>
                    <input onBlur={handleDriveLink} type="text"  name='driveLink' placeholder='Write here' />
                </div>
                {/* <button type='submit'>Submits</button> */}

            </form>

        </div>
    );
};

export default SecondOrder;