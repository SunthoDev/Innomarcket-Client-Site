import React from 'react';
import "./FirstOrder.css"
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';

const FirstOrder = () => {

    let { ast,
        setFirstName,
        setLastNAme,
        setEmail,
        setNumber,
        setCountry,
        setAddress,
        setCity,
        setPostcode,
        setPayment
    } = useContext(AuthContext)

    let handleFirst=(event) => {
        setFirstName(event.target.value)
    }
    let handleLast=(event) => {
        setLastNAme(event.target.value)
    }
    let handleEmail=(event) => {
        setEmail(event.target.value)
    }
    let handleNumber=(event) => {
        setNumber(event.target.value)
    }
    let handleCountry=(event) => {
        setCountry(event.target.value)
    }
    let handleAddress=(event) => {
        setAddress(event.target.value)
    }
    let handleCity=(event) => {
        setCity(event.target.value)
    }
    let handlePostCode=(event) => {
        setPostcode(event.target.value)
    }
    let handlePayment=(event) => {
        setPayment(event.target.value)
    }



    return (
        <div className='firstInformation'>

            <form>

                <div className="PersonalInformation">

                    <div className="md:flex gap-5">
                      
                        <input required onBlur={handleFirst} className='w-full' type="text" placeholder='First Name' />
                        <input required onBlur={handleLast} className='w-full' type="text" placeholder='Last Name' />
                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handleEmail} className='w-full' type="email" placeholder='Email Address' />
                        <input required onBlur={handleNumber} className='w-full' type="tel" placeholder='Phone Number' />
                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handleCountry} className='w-full' type="text" placeholder='Country' />
                        <input required onBlur={handleAddress} className='w-full' type="text" placeholder='Street Address' />
                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handleCity} className='w-full' type="text" placeholder='City' />
                        <input required onBlur={handlePostCode} className='w-full' type="text" placeholder='Postcode / ZIP' />
                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handlePayment} className='w-full' type="number" placeholder='Payment Amount' />
                    </div>

                </div>


                <div className="cardInformation">
                    {/* <div className="Accept flex items-center">
                            <h2>We Accept</h2>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>

                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handleCardInfo} className='w-full' type="number" placeholder='Card Number' />
                        <input required onBlur={handleUsd} className='w-full' type="number" placeholder='Usd' />
                    </div>
                    <div className="md:flex gap-5">
                        <input required onBlur={handleMM} className='w-full' type="number" placeholder='MM' />
                        <input required onBlur={handleYY} className='w-full' type="number" placeholder='YY' />
                        <input required onBlur={handleCVV} className='w-full' type="number" placeholder='CVV' />
                    </div> */}
                    
                    <h2>Note</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat perferendis alias labore optio in, dolorem eos commodi soluta itaque quae odio, totam quisquam nobis modi aspernatur obcaecati. Amet, fuga?</p>
                </div>
                    
            </form>

            {
                ast == false ? <div className="text-red-500 text-right font-bold">please fill up the form</div> : <div className="text-green-600 text-right font-bold">Go to your next process</div>
            }

        </div>
    );
};

export default FirstOrder;