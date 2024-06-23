import React, { useState } from 'react'
import NeedHelpe from './../../../HomeAllSection/NeedHelpe/NeedHelpe';
import "./HomePageControl.css"
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const HomePageControl = () => {
    let { refetch, data: help = [] } = useQuery(["help"], async () => {
        let res = await fetch("http://localhost:5000/help")
        return res.json()
      })


    let [poup, setPoup] = useState(false)
    const handleEditeProfile = () => {
        setPoup(true)
    }
    const clseAlertButton = () => {
        setPoup(false)
    }

    let handleUpdateData = (event) => {
        event.preventDefault()
        let titleVal = event.target.title.value
        let btnVal = event.target.btnname.value
        let DiscriptionBody = event.target.discrip.value
        let _id = '6536408c98281073a5ff2d48';
        let allUpData = { titleVal, btnVal, DiscriptionBody }
         console.log(allUpData)

        fetch(`http://localhost:5000/helpUpdate/${_id}`, {
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


  return (
    <>
     
    {<NeedHelpe />}
    <button onClick={handleEditeProfile} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
         <span>Edit</span>
    </button>

    <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[68%]  ${poup === true && "showAlertJs"}`} >
    <div className="poup ">
                    <div className="popInfo px-4 mt-3">
                        
                        <h6>Update Your Profile Information</h6>
                        <form onSubmit={handleUpdateData}>
                        {help.map(({titles, body, btnvalue}) =>{
                                        return <>
                         <div className="inputBox grid grid-cols-2 md:grid-cols-2 gap-5">
                                <div className="inputData">
                                    
                                    <h5>Enter Your Title</h5>
                                    <input name='title' className='w-[100%]' defaultValue={titles} type="text" />
                                </div>
                                <div className="inputData">
                                    <h5>Enter Your Button Name</h5>
                                    <input name='btnname' defaultValue={btnvalue} className='w-[100%]' type="text" />
                                </div>
                            </div>

                            <div className="inputBox grid grid-cols-2 md:grid-cols-2 gap-5">
                            </div>
                            <div className="inputBox ">
                                <h5>Enter Your Discription</h5>
                                <textarea defaultValue={body} name="discrip" id="" cols="30" rows="10"></textarea>
                            </div>                                       
                                        </>
                                    })}

                
                            <button className='UpdateButton' type="submit">Updated</button>

                        </form>

                    </div>
                    <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                </div>
                </div>

    </>
  )
}

export default HomePageControl