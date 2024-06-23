import React, { useState } from 'react';
import "./GetTouch.css"
import Help from "../../../assets/WebsiteImage/Help.png"

import Swal from 'sweetalert2';

const GetTouch = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [projects, setProjects] = useState("");
    const [message, setMessage] = useState("");

    const handleFname = (e) =>{
        setFname(e.target.value);
    }
    const handleLname = (e) =>{
        setLname(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleProject = (e) =>{
        setProjects(e.target.value);
    }
    const handleMessage = (e) =>{
        setMessage(e.target.value);
    }

  


const handlesubmit = (e) =>{
    e.preventDefault();
    //console.log(fname, lname, emails, projects, message);
   // let fName = "Emrul" , lName = "hasan", email = "ab@gmail.com", projectType = "Software", messages = "Hi am Riya";
    let ContactData = {fname, lname, email, projects, message};
    console.log(ContactData);
    fetch('http://localhost:5000/ContactData',{
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify(ContactData)
     
    })
    .then(res=> res.json())
    .then(data=> {
      //console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    //end api store
    setFname('');
    setLname('');
    setEmail('');
    setProjects('');
    setMessage('');
}


    return (
        <div className='px-2 py-24 md:px-0 Services  bg-[#202F4E]'>

            <div className="w-[100%] lg:w-[1140px] mx-auto">

                <div className="titleTouch">
                    <h2>CONTACT</h2>
                    <h3 className='text-white'>Get In Touch</h3>
                </div>

                <div className="TouchParent grid grid-col-2 md:grid-cols-2 gap-14 items-center">
                 

                    <form onSubmit={handlesubmit}>
                    <div className="left order-2 md:order-1">

                        <div className="grid grid-col-1 md:grid-cols-2 gap-5  text-white">
                            <div className="">
                                <h2 className='getTucthTitle'>First Name</h2>
                                <input required onChange={handleFname} value={fname} name='fname' className='firstLast text-black' type="text" placeholder='Enter your first name' />
                            </div>
                            <div className="">
                                <h2 className='getTucthTitle'>Last Name</h2>
                                <input required onChange={handleLname} value={lname} name='lname' className='firstLast text-black' type="text" placeholder='Enter your last name'/>
                            </div>
                        </div>

                        <div className="div text-white pt-4">
                            <h2 className='getTucthTitle'>Enter Your Email</h2>
                            <input required onChange={handleEmail} value={email} name='email' className='emailInput text-black' type="text" placeholder='Enter your email'/>
                        </div>

                        <div className="getTuchLeft text-white">

                            <div className="flex">
                                <input onChange={handleProject} name='project' type="radio" value="UI & UX Design" className="mr-2 radio border border-white radioDesign"  />
                                <h3 className='text-white font-semibold radioText'>UI & UX Design</h3>
                                <input onChange={handleProject} name='project' type="radio" value="Web Development"  className="mr-2 radio border border-white radioDesign"  />
                                <h3 className='text-white font-semibold radioText'>Web Development</h3>
                            </div>

                            <br />
                            <div className="flex">
                                <input onChange={handleProject} name='project' type="radio" value="Software Development" className="mr-2 radio border border-white radioDesign"  />
                                <h3 className='text-white font-semibold radioText'>Software Development</h3>
                                <input onChange={handleProject} name='project' type="radio" value="Graphic Design" className="mr-2 radio border border-white radioDesign"  />
                                <h3 className='text-white font-semibold radioText'>Graphic Design</h3>
                            </div>
                            
                            <br />
                            <div className="flex">
                                <input onChange={handleProject} name='project' type="radio" value="Others" className="mr-2 radio border border-white radioDesign"  />
                                <h3 className='text-white font-semibold radioText'>Others</h3>
                            </div>
                        </div>


                        <div className="MessagePart text-white mt-4">
                            <h2 className='getTucthTitle'>Message</h2>
                            <textarea required onChange={handleMessage} value={message} name='message' className='messageInput text-black' id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                        </div>

                        <button type="submit" className='CustomerBtn'>Send</button>
                    </div>
                    </form>


                    <div className="right order-1 md:order-2">
                        <div className="img">
                            <img className='w-[80%] h-[100%]' src={Help} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;