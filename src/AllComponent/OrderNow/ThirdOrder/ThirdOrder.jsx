import React, { useContext } from 'react';
import "./ThirdOrder.css"
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';






const ThirdOrder = () => {
    let { user, AllData, setAst, secondOrderInfo} = useContext(AuthContext)
    let {projectType, about,
        questionOne,
        questionTwo,
        questionThree,
        questionFour,
        driveLink} = AllData;

    //console.log(AllData);
    return (
    
        <div className='ThirdInformation'>

            <form>
                <div className="projectDetailsThird">

                    <h2>Project Type</h2>
                    <div class="flex">
                        <input checked type="radio" name="radio-1" class="mr-2 radio border border-[#FA5D6F] " />
                        <h3 class="text-black font-semibold">{projectType}</h3>
                    </div>

                    <h4>Breif about your project</h4>
                    <p>{about}</p>

                    <div className="QuestionPart">
                        <h2>Question 1</h2>
                        <p>{questionOne}</p>
                    </div>
                    <div className="QuestionPart">
                        <h2>Question 2</h2>
                        <p>{questionTwo}</p>
                    </div>
                    <div className="QuestionPart">
                        <h2>Question 3</h2>
                        <p>{questionThree}</p>
                    </div>
                    <div className="QuestionPart">
                        <h2>Question 4</h2>
                        <p>{questionFour}</p>
                    </div>

                    <div className="AttachFile">
                        <h2>Attach File</h2>
                        <div className="AllFileName grid grid-cols-1 md:grid-cols-3 gap-5">

                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>

                            <div className="File">
                                <h4>File Name</h4>
                                <div className="Row w-[63%] md:w-[53%]"></div>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                           

                        </div>






                    </div>

                    <div className="QuestionPart">
                        <h2>Fast drive link here (optional)</h2>
                        <p>{driveLink}</p>
                    </div>






                </div>
            </form>

        </div>
    );
};

export default ThirdOrder;