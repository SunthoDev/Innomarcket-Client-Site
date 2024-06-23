import React, { useEffect } from 'react';
import "./ManageClasses.css"
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthoncationAll/AuthProvider/AuthProvider';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import ManageClassCard from './ManageClassCard/ManageClassCard';
import Swal from 'sweetalert2';
import MultiplesOrders from './MultipleOrder/MultiplesOrders';
import easyinvoice from 'easyinvoice';
import Logo from "../../../../assets/logo.png"

const ManageClasses = () => {
    let cnts = 1;
    const [userShow, setUserShow] = useState(true);
    const [getemail, setGetemail] = useState('');
    const [quantity, setQuantity] = useState(0);
    

 
    // TODO________________________________________

    let { testemail, toggleMultiData, setToggleMultiData, user } = useContext(AuthContext)
    const handleBack = () =>{
        setToggleMultiData(true);
    }
    
   // console.log("Test ---- " + toggleMultiData);

    // user data all find use tenStack query
    let { refetch, data: order = [] } = useQuery(["allClass"], async () => {
        let res = await fetch("https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/allOrderData")
        return res.json()
    })
    
    //console.log(order);


    let addPro = [];
    let allObjects = [];
    
    let usetTest;
     order.map((x) => {
        let y = x.userEmail;  
        usetTest = x;  
        addPro.push(y);
        allObjects.push(x);
    })
   // console.log(allObjects);

   //remove duplicate object-----------
   const uniqueIds = [];
   const unique = allObjects.filter(element => {
     const isDuplicate = uniqueIds.includes(element.userEmail);
     if (!isDuplicate) {
       uniqueIds.push(element.userEmail);
       return true;
     }
     return false;
   });

   //console.log(unique)
   // End -------


    const count = {};
    addPro.forEach(element => {
      count[element] = (count[element] || 0) + 1;
      //console.log("cnt - " + count['shanprodhan100@gmail.com']);
    });



   //generate a report start
   const generateReport = (id, orderData) => {


    let { _id, address, city, projectType, country, email, first, last, orderId, number, postcode, userEmail, userImage, userName, payment } = orderData
    let fullName = first + ' '+ last;
    let currentDate = new Date().toJSON().slice(0, 10);
    alert(email);
    console.log("email =" + count[userEmail]);
    var data = {

        "customize": {
            //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
        },
        "images": {
            // The logo on top of your invoice
            "logo": "https://i.ibb.co/sCGMT4V/service-logo.jpg",
            // The invoice background
            "background": "https://public.budgetinvoice.com/img/watermark-draft.jpg"
        },
        // Your own data
        "sender": {
            "company": "Innomarkt Consultancy",
            "address": "Pablo-picasso straße 35 13057 Berlin",
            "zip": "1234 AB",
            "city": "Berlin",
            "country": "Germany"
        },
        // Your recipient
        "client": {
            "company": fullName,
            "address": address,
            "zip": postcode,
            "city": city,
            "country": country
        },
        "information": {
            // Invoice number
            "number": orderId,
            // Invoice data
            "date": currentDate,
            // Invoice due date
            "due-date": "20-01-2024"
        },
        // The products you would like to see on your invoice
        // Total values are being calculated automatically
        "products": [
            {
                "quantity": count[userEmail],
                "description": projectType,
                "tax-rate": 2,
                "price": payment
            }
        ],
        // The message you would like to display on the bottom of your invoice
        "bottom-notice": "Kindly pay your invoice within 15 days.",
        // Settings to customize your invoice
        "settings": {
            "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        },
        // Translate your invoice to your preferred language
        "translate": {

        },
    };
    
    //Create your invoice! Easy!
    easyinvoice.createInvoice(data, function (result) {
        //The response will contain a base64 encoded PDF file
        //console.log('PDF base64 string: ', result.pdf);
        easyinvoice.download('myInvoice.pdf', result.pdf);
    });


   }//end
    // class deleted admin ************************
    const handleDeleteUser = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
           
            // fetch(`https://client-project-deploy-sunthodev.vercel.app/OrderDelete/${id}`, {
            fetch(`https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/OrderDelete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    if (result.isConfirmed) {
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                      }
                }
                refetch()
            })

          })
        
    }


    return (
        <div classNam="">

            <div className="titleManage px-4 md:px-0 w-full md:w-2/4 mx-auto mb-6 mt-8">
                <p>------MANAGE USER------</p>
                <h3>MANAGE ALL ORDER</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-6 rounded-sm">


                <div className="div mx-7 my-8 w-full text-left">

                    <div className="hedInfo">
                        <h2>Total Order: {unique.length}</h2>
                    </div>

                    <div className="MyData pt-10 ">
                        <div className="overflow-x-auto">
                        
                            <button onClick={handleBack} className="backBtn"> Back </button>
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>COUNTRY</th>
                                        <th>DETAILS</th>
                                        <th>ACTION</th>
                                        <th>Report</th>
                                    </tr>
                                </thead>
                            
                                <tbody className='text-center'>
                                    {
                                        //order.map((orderData) => <ManageClassCard key={orderData._id} orderData={orderData}  handleDeleteUser={handleDeleteUser} refetch={refetch}></ManageClassCard>)
                                        
                                        toggleMultiData ?
                                        unique.map((orderData) => {
                                            //if(count[orderData.userEmail] > 1 && orderData.userEmail == 'mdkamrul2058@gmail.com') {
                                               return <MultiplesOrders setUserShow={setUserShow} orderCnt={count[orderData.userEmail]} key={orderData._id} orderData={orderData}  handleDeleteUser={handleDeleteUser} generateReport={generateReport} refetch={refetch} ></MultiplesOrders>
                                        })

                                        :
                                        
                                        allObjects.map((orderData) => {
                                            if(count[orderData.userEmail] > 1 && orderData.userEmail === testemail) {
                                               return <ManageClassCard key={orderData._id} orderData={orderData}  handleDeleteUser={handleDeleteUser} generateReport={generateReport} refetch={refetch} ></ManageClassCard>
                                            }
                                        })
                                    }
                                    
                                </tbody>

                            </table>
                           
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default ManageClasses;