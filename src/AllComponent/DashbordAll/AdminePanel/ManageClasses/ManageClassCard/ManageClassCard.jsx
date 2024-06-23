import { setItem } from 'localforage';
import React from 'react';
import { useState } from 'react';
import "./ManageClassCard.css"
import { FaRegTrashAlt } from 'react-icons/fa';

const ManageClassCard = ({ orderData, handleDeleteUser, generateReport }) => {


    let { _id, address, city, country, email, first, last, number, postcode, userEmail, userImage, userName,payment } = orderData


    //console.log(orderData.country);
    // orderData.map((zx) => {
        
    // })


    let [poup, setPoup] = useState(false)
    const clseAlertButton = () => {
        setPoup(false)
    }
    const handleMoreDetails = () => {
        setPoup(true)
    }



    return (
        
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userImage} alt="img" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-black font-bold text-left'>
                {userName}
            </td>
            <td className='text-black font-bold text-left'>
                {userEmail}
            </td>
            <td className='text-black font-bold text-left'>
                #{country}
            </td>
            <td className='text-black font-bold text-left'>
                <button onClick={handleMoreDetails} className="DetailsClassButton">Details</button>
            </td>
            <td>
                <button onClick={() => handleDeleteUser(_id)} className="deleteClassButton"><FaRegTrashAlt></FaRegTrashAlt></button>
            </td>
            <td>
                <button onClick={() => generateReport(_id, orderData)} className="deleteClassButton">Reports</button>
            </td>
            {/* ------------------------------------------ */}
            <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[45%]  ${poup === true && "showAlertJs"}`} >
                <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        <h5>See You All Order Information</h5>
                        <div className="DataInformations">
                            <h3>First Name</h3>
                            <h5>{first}</h5>
                            <h3>Last Name</h3>
                            <h5>{last}</h5>
                            <h3>Email Address</h3>
                            <h5>{email}</h5>
                            <h3>Phone Number</h3>
                            <h5>{number}</h5>
                            <h3>Country</h3>
                            <h5>{country}</h5>
                            <h3>Street Address</h3>
                            <h5>{address}</h5>
                            <h3>City</h3>
                            <h5>{city}</h5>
                            <h3>Postcode</h3>
                            <h5>{postcode}</h5>
                            <h3>User Payment</h3>
                            <h5>{payment}</h5>

                            <hr />
                            <h4>User Emaie Informations</h4>
                            <img src={userImage} alt="img" />
                            <h3>User name</h3>
                            <h5>{userName}</h5>
                            <h3>User Email</h3>
                            <h5>{userEmail}</h5>

                            
                        </div>
                    </div>
                    <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>
            </div>

            {/* ------------------------------------------ */}
        </tr>
    );
};

export default ManageClassCard;