import React from 'react';
import "./Profile.css"
import { useContext } from 'react';
import { AuthContext } from '../AuthoncationAll/AuthProvider/AuthProvider';
import useRole from '../../Hook/useRole';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useQuery } from '@tanstack/react-query';
import style from './../OrderNow/Bankinfo.module.css';
import BankInfo from '../OrderNow/BankInfo';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {

    // user data all find use tenStack query
    let { data: order = [] } = useQuery(["allClass"], async () => {
        let res = await fetch("https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/allOrderData")
        return res.json()
    })
    //console.log(order);

    const [bankinfoID, setBankinfoID] = useState('');
    const [ordernames, setOrdernames] = useState('kkkkkkkkkk');
    const [bankinfo, setBankinfo] = useState(false);
    let [poup, setPoup] = useState(false)

    const clseAlertButtonBank = () => {
        setBankinfo(false)
    }
    // const handleEditeProfileBank = () => {
    //     setBankinfo(true)
    // }

    const clseAlertButton = () => {
        setPoup(false)
    }
    const handleEditeProfile = () => {
        setPoup(true)
    }


    let navigate = useNavigate()

    const { user, AllData} = useContext(AuthContext)
    const [roles, refetch] = useRole()
    let { bio, email, name, photo, title, _id } = roles
    let { orderId, currentDate, payment } = AllData



    let handleUpdateData = (event) => {
        event.preventDefault()
        let nameValue = event.target.name.value
        let titleValue = event.target.title.value
        let bioValue = event.target.bio.value

        let allUpData = {ordernames, nameValue, titleValue, bioValue }
         console.log(ordernames)

        fetch(`https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/profileUpdate/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(allUpData)
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Profile Update is complete',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()

                }
            })
    }

    //Handle Row
    const handleRow = (ids, names) =>{
        setBankinfo(true)
        setBankinfoID(ids)
        setOrdernames(names)
        //alert(names);
    }

    return (
        
        <div>
            <div className='bg-[#202F4E] py-11 profiles'></div>

            <div className='ProfileALl px-2 py-16 md:px-0 w-[100%] lg:w-[1140px] mx-auto pt-7 md:pt-20'>

                <div className="ProFileMain md:flex">
                    <div className="ProfileLeft w-[100%] md:w-[30%] text-white bg-[#202F4E]">
                        <div className="img">
                            <img src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="img" />
                        </div>
                        <h3>{name}</h3>
                        <h2>{title}</h2>
                        {/* <hr />
                        <h4>Change Profile Picture</h4> */}
                    </div>

                    <div className="ProfileRight w-[100%] md:w-[70%] bg-[#F5F5F5] relative">
                        <button onClick={handleEditeProfile} className="Edite">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <h2>Profile Information</h2>

                        <div className="infoNAme">
                            <h3>Name :</h3>
                            <span className='ml-[73px]'>{name}</span>
                        </div>
                        <div className="infoNAme">

                            <h3>Jobs Title:</h3>
                            <span className='ml-[49px]'>{title}</span>
                        </div>
                        <div className="infoNAme">

                            <h3>Email :</h3>
                            <span className='ml-[73px]'>{email}</span>
                        </div>
                        <div className="infoNAme">

                            <h3>Bio: </h3>
                            <span className='ml-[92px] '>{bio}</span>
                        </div>




                        <h4>Order History</h4>
                        {/* <div className="HistoryOrder bg-[#202F4E] text-white flex justify-between">
                        <Link to=''  className='text-white OrderNow bankinfos'>Order Number: {orderId}</Link>
                           
                            <h2>Date: {currentDate}</h2>
                            <h2>Payment: {payment}</h2>
                        </div>  */}

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="headingColor text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                <th scope="col" class="px-6 py-3">
                    Order No
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Project Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Progress
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment
                </th>
                <th scope="col" class="px-6 py-3">
                    Coversation
                </th>
            </tr>
            </thead>
            <tbody>
            {
                order.map((orderData) => {
                    if(orderData.userEmail === email) {
                       return  <tr class="border-b border-gray-200 dark:border-gray-700 rowcolor">
                       {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        {orderData.orderId}
                       </th> */}
                        <td class="px-3 py-4 bg-gray-50">
                            {orderData.orderId}
                        </td>
                        <td class="px-3 py-4 bg-gray-50">
                             {orderData.currentDate}
                         </td>
                         <td class="px-3 py-4 bg-gray-50 dark:bg-gray-800">
                             {orderData.projectType}
                        </td >
                        <td class="px-3 py-4 bg-gray-50">
                            <button className='progress-btn'> {orderData.progress} </button>
                       </td>
                        <td onClick={()=>{ handleRow(orderData.orderId , orderData.userName) }} class="px-3 py-4">
                            <button className='payment-btn'> {orderData.payment} $</button>
                        </td>
                        <td class="px-3 py-4 bg-gray-50">
                           <button className='conversation-btn'> <NavLink to="/sms">Conversation</NavLink> </button>
                       </td>
                   </tr>
                    }
                })
            }            
            </tbody>
        </table>
         </div>
      </div>
    </div>
                

                {/* ------------------------------------------ */}

                <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[68%]  ${bankinfo === true && "showAlertJs"}`} >
                
                    <div className="poup ">
                        <div className="popInfo px-4 mt-3">
                        {/* <h6>Order No: 123</h6> */}
                        <div>
                              {<BankInfo bankinfoID={bankinfoID} orderNames={ordernames} />}
                         </div>
                        </div>
                        <button onClick={clseAlertButtonBank} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                    </div>

                </div>

                {/* ------------------------------------------ */}

                 {/* ------------------------------------------ */}

             <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[68%]  ${poup === true && "showAlertJs"}`} >

                <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        
                        <h6>Update Your Profile Information</h6>
                        <form onSubmit={handleUpdateData}>
                            <div className="inputBox grid grid-cols-2 md:grid-cols-2 gap-5">
                                <div className="inputData">

                                    <h5>Enter Your Name</h5>
                                    <input name='name' className='w-[100%]' defaultValue={name} type="text" />
                                </div>
                                <div className="inputData">
                                    <h5>Enter Your Jobs Title</h5>
                                    <input name='title' defaultValue={title} className='w-[100%]' type="text" />
                                </div>
                            </div>
                            <div className="inputBox grid grid-cols-2 md:grid-cols-2 gap-5">
                                <div className="inputData">

                                    <h5>Renonly Your Email</h5>
                                    <input name='email' value={email} className='w-[100%]' type="email" />
                                </div>
                                <div className="inputData">

                                    <h5>Renonly Your Image</h5>
                                    <input value={"No Change Your Image (URL)"} className='w-[100%]' type="text" />
                                </div>
                            </div>
                            <div className="inputBox ">
                                <h5>Enter Your Bio</h5>
                                <textarea defaultValue={bio} name="bio" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button className='UpdateButton' type="submit">Update Profile</button>

                        </form>

                    </div>
                    <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>

                </div>

                {/* ------------------------------------------ */}


            </div>
        </div>
    );
};

export default Profile;