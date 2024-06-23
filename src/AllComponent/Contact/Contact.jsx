import React, { useEffect, useState } from 'react';
import "./Contact.css"
import ContactMap from "../../assets/WebsiteImage/map.png"
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
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

  


const handlesubmits = (e) =>{
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





    //For Scroll
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [pathname])

   
    return (
        <div>
            <div className='bg-[#202F4E] py-11'></div>
            <h2 className='aboutTitle'>Contact</h2>
            <div className='ContactAll px-2 pb-14 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>
                <form onSubmit={handlesubmits}>
                <div className="ContactDetails px-[18px] md:px-[47px] py-[52px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="contactLeft order-2 md:order-1 mt-6 md:mt-0">
                        <h2>Let's talk with Us</h2>
                        <p>Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking</p>


                        <div className="ContactInfo">
                            <h3>Contact Info</h3>
                            <div className="number mt-3">
                                <i class="fa fa-phone " aria-hidden="true"></i>
                                <span>+4917655214565</span>
                            </div>

                            <div className="number py-3">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                <span>innomarktconsultancy@gmail.com</span>
                            </div>

                            <div className="number mb-3">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span>Pablo-picasso straße 35 13057 Berlin, Germany</span>
                            </div>

                        </div>


                        <div className="ContactSocialMedia">
                            <h3>Our Social Media</h3>
                            <i class="fa fa-twitter " aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>

                        </div>


                    </div>

                    

                    <div className="contactRight py-[12px] md:py-[34px] px-[10px] md:last:px-[36px]  order-1 md:order-2">

                        <div className="inFoName grid grid-col-1 md:grid-cols-2 gap-5  text-black">
                            <div className="">
                                <h2>First Name</h2>
                                <input required onChange={handleFname} value={fname} className='w-full text-white' placeholder='Enter your first name' type="text" />
                            </div>
                            <div className="">
                                <h2>Last Name</h2>
                                <input required onChange={handleLname} value={lname} className='w-full text-white' placeholder='Enter your last name' type="text" />
                            </div>
                        </div>

                        <div className="inFoName text-black pt-4">
                            <h2>Your Email</h2>
                            <input required onChange={handleEmail} value={email} className='w-full text-white' placeholder='Enter your email' type="text" />
                        </div>

                      <div className="getTuchLeft text-black">
                            <div className="flex">
                                <input onChange={handleProject} type="radio" name="radio-1" value="UI & UX Design" className="mr-2 radio border border-black radioDesign"  />
                                <h3 className='text-black font-semibold radioText'>UI & UX Design</h3>
                                <input onChange={handleProject} type="radio" name="radio-1" value="Web Development" className="mr-2 radio border border-black radioDesign"  />
                                <h3 className='text-black font-semibold radioText'>Web Development</h3>
                            </div>

                            <br />
                            <div className="flex">
                                <input onChange={handleProject} type="radio" name="radio-1" value="Software Development" className="mr-2 radio border border-black radioDesign"  />
                                <h3 className='text-black font-semibold radioText'>Software Development</h3>
                                <input onChange={handleProject} type="radio" name="radio-1" value="Graphic Design" className="mr-2 radio border border-black radioDesign"  />
                                <h3 className='text-black font-semibold radioText'>Graphic Design</h3>
                            </div>

                            <br />
                            <div className="flex">
                                <input onChange={handleProject} type="radio" name="radio-1" value="Others" className="mr-2 radio border border-black radioDesign"  />
                                <h3 className='text-black font-semibold radioText'>Others</h3>
                            </div>
                       </div>



                        <div className="MessagePart text-black mt-4">
                            <h2>Message</h2>
                            <textarea required onChange={handleMessage} value={message} className='text-white' placeholder='Enter your message' name="" id="" cols="30" rows="10"></textarea>
                        </div>


                        <div className="btnContact md:flex justify-between">

                            <button type='submit' className='CustomerBtn'>Send</button>
                            {/* <button className='CustomerBtn'>Live Chat</button> */}

                        </div>


                    </div>

                   
                </div>
                </form>
                {/* ----------------------------------- */}



                <div className="ContactMap relative mt-14">
                    <div className="LocationName">
                        <h3>Pablo-picasso straße 35 13057 Berlin, Germany</h3>
                    </div>
                    <div className="img">
                        <img className='w-[100%] h-[100%]' src={ContactMap} alt="img" />
                    </div>
                </div>








            </div>

        </div>
    );
};

export default Contact;