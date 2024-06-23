import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import './bankmanage.css'
import BankInfoPopUp from './ImageZoomInOut'
import ImageZoomInOut from './ImageZoomInOut'
import imgs1 from '../../../../assets/Portfolio/project01.png'

const BankManageInfo = () => {

  let [poupID, setPoupID] = useState('')

  let [poup, setPoup] = useState(false)
  const clseAlertButton = () => {
      setPoup(false)
  }
  
  const handleMoreDetails = (bid) => {
    ///alert(bid)
      setPoup(true)
      setPoupID(bid);
  }

  let { refetch, data: bank = [] } = useQuery(["bank"], async () => {
    let res = await fetch("https://client-project-server-site-iz924ctuv-projectkamrul-gmailcom.vercel.app/bank")
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
                <p>------MANAGE ORDER------</p>
                <h3>MANAGE ALL ORDER</h3>
            </div>

            <div className="myItemsAll bg-white  flex justify-between  my-10 mx-4 md:mx-6 rounded-sm">


                <div className="div mx-7 my-8 w-full text-left">

                    <div className="hedInfo">
                        <h2>Total Order Completed: {bank.length}</h2>
                    </div>

                    <div className="MyData pt-10 ">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr className="Header">
                                        <th className='text-white'>Name</th>
                                        <th className='text-white'>ORDER NO</th>
                                        <th className='text-white'>MESSAGE</th>
                                        <th className='text-white'>ACTION</th>

                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                {
    
    bank.map(({orderNames, bankinfoID, buyerinfo, imageUrl})=>{ 
      //console.log(bankinfoID)
      return<> <tr class="border-b border-gray-200 dark:border-gray-700 rowcolor text-center">
      <td class="px-6 py-4 bg-gray-50">
         {orderNames}
      </td>
      <td class="px-6 py-4 bg-gray-50">
         {bankinfoID}
      </td>
      <td class="px-6 py-4 bg-gray-50">
         <button onClick={() =>{handleMoreDetails(bankinfoID)}} className='bankDocument'>Message</button> 
      </td>
      <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <button className='bankDocument'><a className='bankDocument' href={imageUrl}>Download</a></button>
        
      </td>   
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
  bank.map(({bankinfoID, buyerinfo, imageUrl})=>{ 
      if(bankinfoID === poupID){
        return <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[70%] ${poup == true && "showAlertJs"}`} >
        <div className="poup ">
         <div className="popInfo px-4">
             <h5 className='banktitle'>Bank Information</h5>
             <div className="DataInformations">
                 <h3>Order No {bankinfoID}</h3>
                  {/* {<ImageZoomInOut imageUrl={imageUrl} />}  */}
               <p>{buyerinfo}</p>
                      
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

export default BankManageInfo