import React from 'react';
import "./NeedHelpe.css"
import { useQuery } from '@tanstack/react-query';

const NeedHelpe = () => {

    let { refetch, data: help = [] } = useQuery(["help"], async () => {
        let res = await fetch("http://localhost:5000/help")
        return res.json()
      })

    return (
        <div className='px-2 py-24 md:px-36 Services  bg-[#F1F3F9]'>

            <div className="help w-full lg:w-[707px]">
                {
                    help.map(({titles, body, btnvalue}) =>{
                        return<>
                    <h2>{titles}</h2>
                    {/* <h2>Help for Techinical issue?</h2> */}
                    <p>{body}</p>
                    <button className='ml-1'>{btnvalue}</button>
                        
                        </>
                    })
                }    
            </div>



            
        </div>
    );
};

export default NeedHelpe;