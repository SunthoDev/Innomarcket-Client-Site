import React, { useState } from 'react';
import "./OrderNow.css"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstOrder from './FirstOrder/FirstOrder';
import SecondOrder from './SecondOrder/SecondOrder';
import ThirdOrder from './ThirdOrder/ThirdOrder';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../AuthoncationAll/AuthProvider/AuthProvider'
import BankInfo from './BankInfo';
const steps = ['Billing Details', 'Order Requirement', 'Review & Confirmation'];


const OrderNow = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    // Page One Data 
    let { user, AllData, setAst, secondOrderInfo} = useContext(AuthContext)
    const {orderId, payment, currentDate} = AllData;
    //console.log(secondOrderInfo);
    // let navigate = useNavigate()


    let [poup, setPoup] = useState(false)
    const clseAlertButton = () => {
        setPoup(false)
    }

    let [bank,setBank]=useState(false)
    const handleOrderSend = () => {
        fetch("https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.app/orderData", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(AllData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    setPoup(true)
                    // navigate("/")
                    setBank(true)
                }
            })
    }

    //console.log(AllData)

    if(AllData.address == "" || AllData.city == "" || AllData.country == "" || AllData.email ==""||AllData.first =="" || AllData.last =="" || AllData.number =="" || AllData.postcode =="" ){
        setAst(false)
    }else{
        setAst(true)

    }



    return (
        <div className='orderNowAll'>
            <div className='bg-[#202F4E] py-11'></div>

            <div className='Order px-2 py-16 md:px-64 pt-7 md:pt-20'>
                
                <h2>Please Your Order</h2>

                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = (
                                    <Typography variant="caption">Optional</Typography>
                                );
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                               
                                <Button onClick={() =>{navigate("/")}} className='RESETButton'>
                                    Home
                                </Button>
                                <Button
                                    onClick={handleReset}
                                    className='RESETButton'
                                >
                                    Reset
                                </Button>
                                
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            {activeStep === 0 && <FirstOrder></FirstOrder>}
                            {activeStep === 1 && <SecondOrder></SecondOrder>}
                            {activeStep === 2 && <ThirdOrder></ThirdOrder>}


                            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}


                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button

                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                    className='BACKButton'
                                >
                                    Back

                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button
                                        onClick={handleSkip} sx={{ mr: 1 }}
                                        className='SKIPButton'
                                    >
                                        Skip
                                    </Button>
                                )}

                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? <button className='FINISHButton' onClick={handleOrderSend}>Finish</button> : <button className='NEXTButton' disabled={AllData.address == "" || AllData.city == "" || AllData.country == "" || AllData.email == "" || AllData.first == "" || AllData.last == "" || AllData.number == "" || AllData.postcode == "" ? true : false}>Next</button>
                                    }
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>

                {/* ------------------------------------------ */}

                {bank &&  
                <BankInfo />

                }


                {/* ------------------------------------------ */}

                <div className={`alertContainer  px-4 lg:px-0 w-full lg:w-[54%]  ${poup === true && "showAlertJs"}`} >

                    <div className="poup ">
                        <div className="popInfo px-4 mt-3">

                            <h1>Yout Order is Completed</h1>
                            <i class="fa fa-check" aria-hidden="true"></i>

                            <div className="cardInfo md:flex justify-between">
                                <h4>Order Number: {orderId}</h4>
                                <h4>Date: {currentDate}</h4>
                                <h4>Payment: ${payment}</h4>


                            </div>
                        </div>

                        <button onClick={clseAlertButton} className="removeAlertBtn"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                    </div>


                </div>

                {/* ------------------------------------------ */}


            </div>

        </div>
    );
};

export default OrderNow;









