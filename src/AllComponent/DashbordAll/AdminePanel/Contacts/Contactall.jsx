import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'



import './Contactall.css'

const Contactall = () => {

  let [poupID, setPoupID] = useState('')

  let [poup, setPoup] = useState(false)
  const clseAlertButton = () => {
      setPoup(false)
  }
  
  const handleMoreDetails = (bid) => {
   // alert(bid)
      setPoup(true)
      setPoupID(bid);
  }

  let { refetch, data: contact = [] } = useQuery(["contact"], async () => {
    let res = await fetch("http://localhost:5000/contact")
    return res.json()
  })

  
 
  // bank.map(({bankinfoID, buyerinfo, imageUp})=>{ 
  //   console.log(bankinfoID)
  //  });
  //bankfile.map((bankdata) => console.log(bankdata.bankinfoID + " " + bankdata.buyerinfo))

  return (
    <>
{/* Testing Part */}

<div classNam="">
            <div className="titleUser px-4 md:px-0 w-full md:w-2/4 mx-auto mb-6 mt-8">
                <p>------MANAGE Contacts------</p>
                <h3>MANAGE ALL Contacts</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-6 rounded-sm">


                <div className="div mx-7 my-8 w-full text-left">

                    <div className="hedInfo">
                        <h2>Total Messages {contact.length}</h2>
                    </div>

                    <div className="MyData pt-10 ">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th className='text-white'>Email</th>
                                        <th className='text-white'>MESSAGE</th>
                                        {/* <th className='text-white'>ACTION</th> */}

                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                {
    
    contact.map(({_id ,fName, lName, email, projectType, messages})=>{ 
      //console.log(bankinfoID)
      return<> <tr class="border-b border-gray-200 dark:border-gray-700 rowcolor text-center">
      <td class="px-6 py-4 bg-gray-50">
         {email}
      </td>
      <td class="px-6 py-4 bg-gray-50">
         <button onClick={() =>{handleMoreDetails(_id)}} className='bankDocument'>Message</button> 
      </td>
      {/* <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <button className='bankDocument'><a className='bankDocument' href={lName}>Download</a></button>
      </td>    */}
     </tr>
   </>
     })
        
}
                                </tbody>

                            </table>
                        </div>

                    </div>


                </div>
            </div>


        </div>

{/* Ending part */}



{    
  contact.map(({_id,fname, lname, email, projects, message})=>{ 
      if(_id === poupID){
        return <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[70%] ${poup == true && "showAlertJs"}`} >
        <div className="poup ">
         <div className="popInfo px-4">
             <h5 className='banktitle'>Contact Information</h5>
             <div className="DataInformations">
                 <h3>Email :  {email}</h3>
                 <h3>Name : {fname} {" "} {lname}</h3>
                 <h3>Project Type :  {projects}</h3>
                 <h3>Message :  {message}</h3>
             </div>
         </div>
         <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
     </div>
    </div>
      }

    })
}

    </>
  )
}

export default Contactall