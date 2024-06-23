import React, { useState } from 'react';



import "./OrderNow.css"
import './Bank.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const BankInfo = ({bankinfoID, orderNames}) => {
 // const [imageUp , setImageUp] = useState('');
  const [buyerinfo, setBuyerinfo] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {

      // client side data upload and receved function and using imageBB
      let fromData=new FormData()
      fromData.append( "image" , data.image[0])
      
      fetch(`http://localhost:5000/upload`,{
        method:"POST",
        body:fromData
    })
    .then(res=> res.json())
    .then(imageResponse=>{
      //console.log(imageResponse)
      if(imageResponse.url){

        const imageUrl=imageResponse.url
        //console.log(imageUrl)//store database image
        //setImageUp(imageUrl)

        //api for store

        let bankData = {orderNames, bankinfoID, buyerinfo, imageUrl};
        //console.log(bankData);
        fetch('https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/BankData',{
          method:"POST",
          headers:{"content-type" : "application/json"},
          body:JSON.stringify(bankData)
         
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
      }

      })
  };

  

  // function covertToBase64(e) {
  //   console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     //console.log(reader.result); //base64encoded string
  //     setImageUp(reader.result);
  //   };
  //   reader.onerror = error => {
  //     console.log("Error: ", error);
  //   };
  // }

  //End............

  const handlebuyerinfo = (e) =>{
    e.preventDefault();
       setBuyerinfo(e.target.value);
  }

    // console.log(bankinfoID + " " + buyerinfo);
    // console.log(imageUp);




  // let handleSubmit = (e) =>{
  //   e.preventDefault();
   
  // }
// //http://localhost:5000/bank


// let { refetch, data: bank = [] } = useQuery(["bank"], async () => {
//   let res = await fetch("http://localhost:5000/bank")
//   return res.json()
// })

//   console.log(bank)













    return (
      <div className="BankTransfer">
        <h2 className='testbank'>Bank Transfer</h2>
        <div className="BankDetails grid grid-cols-1 md:grid-cols-2">
          <div className="BuyerInfo">
            <h3>Deposite Bank Details</h3>
            <h4>Name: Md Nazmul Sakib Sarker</h4>
            <h4>IBAN: DE30 1001 1001 2628 3876 13</h4>
            <h4>BIC: NTSBDEB1XXX</h4>
            <h4>Bank Name: N26 Bank</h4>
            <h4>Country: Germany</h4>
            

            
          </div>

          <div className="SenderInfo">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Buyer Info</h3>
              <textarea onChange={handlebuyerinfo} className="text-black" placeholder='Enter Your Bank Details' name="buyerinfo" id="" cols="30" rows="10"></textarea>

              {/* <label class="block mb-2 text-sm font-medium  dark:text-white" for="file_input">Attachment in here </label>
              <input onChange={covertToBase64} name="image" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" /> */}

              <div className=" form-control">
              <label className="label">
              </label>
              <label className=" input-group w-full">
                <span>Image</span>
                <input type="file" name='image'
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered w-full" />
              </label>
            </div>

              <button type="submit" className='BankNextBtn'> Send </button>
            </form>
          </div>

        </div>


      </div>
    )
  }

  export default BankInfo