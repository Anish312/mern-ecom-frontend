import React, { Fragment } from 'react'
import "./CheckoutSteps.css"
import {Typography , Stepper , StepLabel ,Step } from "@material-ui/core"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck"

import AccountBalanceIcon from "@material-ui/icons/AccountBalance"

 function CheckoutSteps({activeStep}) {

    const steps = [
       {
        lable:<Typography>Shipping Details</Typography>,
        icon:<LocalShippingIcon />
       },
       {
        lable:<Typography>Confirm Order</Typography>,
        icon:<LibraryAddCheckIcon />
       },
       {
        lable:<Typography>Payment</Typography>,
        icon:<AccountBalanceIcon />
       },
       
    ]
    const stepStyle = {
      boxSizing: 'border-box',
    }
  return (
    <div style={{background:"black"}}> 
       <Stepper alternativeLable activeStep={activeStep} style={stepStyle}>
         {steps.map((item ,index) => (
            <Step key={index} active={activeStep === index ? true : false}
             completed={activeStep  >= index ? true : false}
            >
                <StepLabel  style={{
                    color:activeStep >= index? "tomato" : "gray"
                }} icon={item.icon}>{item.lable}</StepLabel>
            </Step>
         ))}
       </Stepper>
    </div>
  )
}

export default CheckoutSteps